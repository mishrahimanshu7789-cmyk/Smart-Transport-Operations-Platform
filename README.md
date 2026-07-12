# Smart-Transport-Operations-Platform
It is a smart transporation system for a buissness mangement
import { getVehicles, getTrips, getExpenses, getVehicleCosts, getVehicleRevenue, getVehicleROI } from './db.js';
import { showToast } from './main.js';
let reportsChartObj = null;
export function renderReports(container) {
  const vehicles = getVehicles().filter(v => v.status !== 'Retired');
  const trips = getTrips();
  const expenses = getExpenses();
  // 1. Calculate fleet-wide metrics
  let totalAcquisition = 0;
  let totalOpsCost = 0;
  let totalRevenue = 0;
  let totalDistance = 0;
  let totalFuelLiters = 0;
  
  vehicles.forEach(v => {
    totalAcquisition += Number(v.acquisitionCost || 0);
    
    const costs = getVehicleCosts(v.registration);
    totalOpsCost += costs.totalOperational;
    
    const rev = getVehicleRevenue(v.registration);
    totalRevenue += rev;
    totalDistance += Number(v.odometer || 0);
  });
  // Calculate total fuel liters across all vehicles
  expenses.forEach(e => {
    if (e.type === 'Fuel' && e.liters) {
      totalFuelLiters += Number(e.liters);
    }
  });
  // Fleet-wide ROI = (Total Revenue - Total Ops Cost) / Total Acquisition
  const fleetROI = totalAcquisition > 0 ? (totalRevenue - totalOpsCost) / totalAcquisition : 0;
  const fleetROIFormatted = (fleetROI * 100).toFixed(2) + '%';
  // Average Fuel Efficiency = Total Distance / Total Fuel Liters
  const avgFuelEfficiency = totalFuelLiters > 0 ? (totalDistance / totalFuelLiters).toFixed(2) : 'N/A';
  // Fleet Utilization = (Active Vehicles / Total Non-Retired Vehicles) * 100
  const activeVehiclesCount = vehicles.filter(v => v.status === 'On Trip').length;
  const utilization = vehicles.length > 0 ? Math.round((activeVehiclesCount / vehicles.length) * 100) : 0;
  // 2. Render UI
  container.innerHTML = `
    <!-- Top actions -->
    <div class="view-actions-row">
      <h2 style="font-size: 1.15rem; font-weight: 700;">Financial & Operational Performance</h2>
      <button class="btn btn-action-primary" id="btn-export-csv">
        <i data-lucide="download"></i>
        <span>Export CSV Reports</span>
      </button>
    </div>
    <!-- Analytics summary cards -->
    <div class="kpi-grid">
      <div class="kpi-card kpi-violet">
        <div class="kpi-header">
          <span class="kpi-title">Fleet ROI</span>
          <div class="kpi-icon-wrapper">
            <i data-lucide="percent"></i>
          </div>
        </div>
        <div class="kpi-value">${fleetROIFormatted}</div>
        <div class="kpi-trend ${fleetROI >= 0.1 ? 'positive' : 'negative'}">
          <span>Net Return on Capital</span>
        </div>
      </div>
      
      <div class="kpi-card kpi-red">
        <div class="kpi-header">
          <span class="kpi-title">Total Operational Cost</span>
          <div class="kpi-icon-wrapper">
            <i data-lucide="wallet"></i>
          </div>
        </div>
        <div class="kpi-value">$${totalOpsCost.toLocaleString()}</div>
        <div class="kpi-trend negative">
          <span>Fuel + Maintenance</span>
        </div>
      </div>
      <div class="kpi-card kpi-green">
        <div class="kpi-header">
          <span class="kpi-title">Total Revenue</span>
          <div class="kpi-icon-wrapper">
            <i data-lucide="badge-dollar-sign"></i>
          </div>
        </div>
        <div class="kpi-value">$${totalRevenue.toLocaleString()}</div>
        <div class="kpi-trend positive">
          <span>Trip Earnings</span>
        </div>
      </div>
      <div class="kpi-card kpi-blue">
        <div class="kpi-header">
          <span class="kpi-title">Avg Fuel Efficiency</span>
          <div class="kpi-icon-wrapper">
            <i data-lucide="gauge"></i>
          </div>
        </div>
        <div class="kpi-value">${avgFuelEfficiency} <span style="font-size: 0.9rem; font-weight: 500;">km/L</span></div>
        <div class="kpi-trend neutral">
          <span>Across all fuel logs</span>
        </div>
      </div>
    </div>
    <!-- Charts and Tables -->
    <div class="dashboard-analysis-section" style="grid-template-columns: 1.2fr 1.8fr; margin-top: 24px;">
      <div class="chart-card">
        <h3>Operational Breakdown</h3>
        <div class="chart-container" style="height: 350px;">
          <canvas id="reportsCompareChart"></canvas>
        </div>
      </div>
      <div class="chart-card" style="overflow-x: auto;">
        <h3>ROI Ledger (Per Vehicle)</h3>
        <table class="custom-table" style="font-size: 0.82rem; margin-top: 15px;">
          <thead>
            <tr>
              <th>Vehicle</th>
              <th>Acquisition</th>
              <th>Fuel Cost</th>
              <th>Maint Cost</th>
              <th>Ops Total</th>
              <th>Revenue</th>
              <th>ROI</th>
            </tr>
          </thead>
          <tbody id="reports-roi-tbody">
            <!-- Injected here -->
          </tbody>
        </table>
      </div>
    </div>
  `;
  if (window.lucide) {
    window.lucide.createIcons();
  }
  // Bind CSV export
  document.getElementById('btn-export-csv').addEventListener('click', exportReportsCSV);
  // Render Table & Chart
  populateLedger(vehicles);
  renderComparisonChart(vehicles);
}
function populateLedger(vehicles) {
  const tbody = document.getElementById('reports-roi-tbody');
  
  tbody.innerHTML = vehicles.map(v => {
    const costs = getVehicleCosts(v.registration);
    const rev = getVehicleRevenue(v.registration);
    const roi = getVehicleROI(v.registration);
    const roiFormatted = (roi * 100).toFixed(2) + '%';
    let roiClass = 'medium';
    if (roi > 0.15) roiClass = 'high';
    else if (roi < 0.05) roiClass = 'low';
    return `
      <tr>
        <td>
          <div style="font-weight: 700;">${v.model}</div>
          <div style="font-family: monospace; font-size: 0.72rem; color: var(--text-muted);">${v.registration}</div>
        </td>
        <td>$${Number(v.acquisitionCost).toLocaleString()}</td>
        <td>$${costs.fuel.toLocaleString()}</td>
        <td>$${costs.maintenance.toLocaleString()}</td>
        <td style="color: var(--accent-danger); font-weight: 600;">$${costs.totalOperational.toLocaleString()}</td>
        <td style="color: var(--accent-success); font-weight: 600;">$${rev.toLocaleString()}</td>
        <td>
          <span class="status-badge ${roiClass}">${roiFormatted}</span>
        </td>
      </tr>
    `;
  }).join('');
}
function renderComparisonChart(vehicles) {
  const ctx = document.getElementById('reportsCompareChart').getContext('2d');
  
  if (reportsChartObj) {
    reportsChartObj.destroy();
  }
  const labels = vehicles.map(v => v.registration);
  const acquisitionCosts = vehicles.map(v => v.acquisitionCost);
  const revenues = vehicles.map(v => getVehicleRevenue(v.registration));
  const opsCosts = vehicles.map(v => getVehicleCosts(v.registration).totalOperational);
  reportsChartObj = new Chart(ctx, {
    type: 'bar',
    data: {
      labels,
      datasets: [
        {
          label: 'Acquisition ($)',
          data: acquisitionCosts,
          backgroundColor: 'rgba(139, 92, 246, 0.4)',
          borderColor: '#8b5cf6',
          borderWidth: 1.5
        },
        {
          label: 'Operational Cost ($)',
          data: opsCosts,
          backgroundColor: 'rgba(239, 68, 68, 0.5)',
          borderColor: '#ef4444',
          borderWidth: 1.5
        },
        {
          label: 'Revenue ($)',
          data: revenues,
          backgroundColor: 'rgba(16, 185, 129, 0.5)',
          borderColor: '#10b981',
          borderWidth: 1.5
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          grid: { color: 'rgba(255, 255, 255, 0.05)' },
          ticks: { color: '#94a3b8', font: { family: 'Plus Jakarta Sans', size: 10 } }
        },
        y: {
          grid: { color: 'rgba(255, 255, 255, 0.05)' },
          ticks: { color: '#94a3b8', font: { family: 'Plus Jakarta Sans', size: 10 } }
        }
      },
      plugins: {
        legend: {
          labels: { color: '#94a3b8', font: { family: 'Plus Jakarta Sans', size: 11 } }
        }
      }
    }
  });
}
function exportReportsCSV() {
  const vehicles = getVehicles();
  
  let csvContent = 'data:text/csv;charset=utf-8,';
  csvContent += 'Registration,Model,Type,Region,Acquisition Cost ($),Fuel Costs ($),Maintenance Costs ($),Total Operational Costs ($),Revenue ($),ROI (%)\n';
  vehicles.forEach(v => {
    const costs = getVehicleCosts(v.registration);
    const rev = getVehicleRevenue(v.registration);
    const roi = (getVehicleROI(v.registration) * 100).toFixed(2);
    
    csvContent += `"${v.registration}","${v.model}","${v.type}","${v.region}",${v.acquisitionCost},${costs.fuel},${costs.maintenance},${costs.totalOperational},${rev},${roi}\n`;
  });
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', `fleet_reports_roi_${new Date().toISOString().split('T')[0]}.csv`);
  document.body.appendChild(link);
  
  link.click();
  document.body.removeChild(link);
  
  showToast('CSV report downloaded successfully.', 'success');
}
