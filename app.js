// LogisticsPro Unified Operations Control Controller

// Default mock data for Global/US Fleet
const defaultUsVehicles = [
    {
        plate: "TX-9042-HG",
        model: "Freightliner Cascadia",
        type: "Class 8 Heavy Duty",
        fuel: "Diesel",
        mileage: 12400,
        status: "Available",
        imageStyle: "truck",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCDHJAG7uuJa_JSQB5_xG0zuteE6KxlCT86bKNRZHpwOrhZ96t8CgQbibd3XT79ST5o5eO8JVdpx5Fr4t3yJUYvw5CLKuk-tQ7CEjteZAk5C0dhluK73Y0L8-KjIrBTlvy7SAI68trn2Hq2QhQcwrf0U4N95pgsGMz5aC2OgmHGu-YMYiACykBHUK82zH8O4WeM1kuCS0mrvtLVdvQfB8kn8mhvQ2qQW62w5mRC4hSfugndrVjfDrCpgA"
    },
    {
        plate: "CA-1120-XB",
        model: "Ford E-Transit",
        type: "Electric Cargo Van",
        fuel: "Electric",
        mileage: 8200,
        status: "On Trip",
        imageStyle: "van",
        destination: "Austin, TX",
        eta: "14:20 PM",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDcWcYWLNtM77e_jzZ3OrtDdchlICwZJojQepvr8m_u7duhrYAm8fUVwwPMwr6FUP-yj-60-0OyBo_9txaZJTo_7sQU82NR9KnOxTMum6QExH-OjuhTZY2kS9smVBHqOy9-BPwgMjTqWIENXygJTEDllFx5CWKSBn964nVhzf0S7nYyhKVSzbTzZtXpbx_Jdtm-DkexIehiebZM2Kw5YmVRPm6w6jfNc9zFYeyRg59w2vXdNIuW58SuOg"
    },
    {
        plate: "NY-7734-PL",
        model: "Kenworth T680",
        type: "Flatbed Hauler",
        fuel: "Diesel",
        mileage: 38200,
        status: "In Shop",
        imageStyle: "flatbed",
        service: "Engine Oil Checkup",
        estComp: "Jun 14",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNDmNnjd-Ami7joiQpWvlsCE9E3l2WmhrOIHNjRtmAvk1i9TvhVzamXebgVBYfL5NwiQhm-gptLdELQcKesC5vtl3fc4bY8RTtLzsAtwdLwWiRLcK3TY-LZCpFXWcrqtaJPFLgxAZJ3nTsdiMyPgwzyRK6PpWtD_I48weiuKR9bTgBngY1lcZKHeIhnE2AnbIIxhVJJyzyynGrabL8c39uZREA348d3uoVQEfmUhg1--SGw1R3KkAbMw"
    },
    {
        plate: "FL-5509-RT",
        model: "Peterbilt 389",
        type: "Retired Legacy Fleet",
        fuel: "Diesel",
        mileage: 1200000,
        status: "Retired",
        imageStyle: "truck",
        reason: "Age Limit",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZEwzA6y1YKi0-75OLYbOz1roAalrr1ox3gAUgbxVVXIm2viVAKE29ZyUFF5KtPbT1EjNS_BdxmPI__xcf5s3dp9UkLpvDzDjvXcME__XT-LIxFrIrmolcthdDFr8N18sWAn_zyW1x72zuSQqtF2dC8Vsu4XiSnTujMu3IA05Vy3noH5hg4WVCH5Il7qoaedcFpCJLcXgkooWoSyX5WT9K2AP7qCGz5wvZsxgBJafZPE7GFRuocW_3aQ"
    }
];

// Default mock data for India Fleet
const defaultInVehicles = [
    {
        plate: "MH-04-AB-1234",
        model: "Tata Prima",
        type: "Heavy Commercial Vehicle",
        fuel: "CNG",
        mileage: 20000,
        status: "Available",
        imageStyle: "truck",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCDHJAG7uuJa_JSQB5_xG0zuteE6KxlCT86bKNRZHpwOrhZ96t8CgQbibd3XT79ST5o5eO8JVdpx5Fr4t3yJUYvw5CLKuk-tQ7CEjteZAk5C0dhluK73Y0L8-KjIrBTlvy7SAI68trn2Hq2QhQcwrf0U4N95pgsGMz5aC2OgmHGu-YMYiACykBHUK82zH8O4WeM1kuCS0mrvtLVdvQfB8kn8mhvQ2qQW62w5mRC4hSfugndrVjfDrCpgA"
    },
    {
        plate: "KA-01-ME-1120",
        model: "Tata Ace",
        type: "Mini Cargo Truck",
        fuel: "CNG",
        mileage: 12500,
        status: "On Trip",
        imageStyle: "van",
        destination: "Bengaluru, KA",
        eta: "14:20 PM",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDcWcYWLNtM77e_jzZ3OrtDdchlICwZJojQepvr8m_u7duhrYAm8fUVwwPMwr6FUP-yj-60-0OyBo_9txaZJTo_7sQU82NR9KnOxTMum6QExH-OjuhTZY2kS9smVBHqOy9-BPwgMjTqWIENXygJTEDllFx5CWKSBn964nVhzf0S7nYyhKVSzbTzZtXpbx_Jdtm-DkexIehiebZM2Kw5YmVRPm6w6jfNc9zFYeyRg59w2vXdNIuW58SuOg"
    },
    {
        plate: "DL-09-CD-7734",
        model: "Ashok Leyland Dost",
        type: "Light Commercial Vehicle",
        fuel: "CNG",
        mileage: 45000,
        status: "In Shop",
        imageStyle: "flatbed",
        service: "Brake System Maintenance",
        estComp: "Jun 14",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNDmNnjd-Ami7joiQpWvlsCE9E3l2WmhrOIHNjRtmAvk1i9TvhVzamXebgVBYfL5NwiQhm-gptLdELQcKesC5vtl3fc4bY8RTtLzsAtwdLwWiRLcK3TY-LZCpFXWcrqtaJPFLgxAZJ3nTsdiMyPgwzyRK6PpWtD_I48weiuKR9bTgBngY1lcZKHeIhnE2AnbIIxhVJJyzyynGrabL8c39uZREA348d3uoVQEfmUhg1--SGw1R3KkAbMw"
    },
    {
        plate: "UP-16-ZZ-5509",
        model: "Mahindra Blazo",
        type: "Retired Heavy Fleet",
        fuel: "Diesel",
        mileage: 150000,
        status: "Retired",
        imageStyle: "truck",
        reason: "Age Limit",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZEwzA6y1YKi0-75OLYbOz1roAalrr1ox3gAUgbxVVXIm2viVAKE29ZyUFF5KtPbT1EjNS_BdxmPI__xcf5s3dp9UkLpvDzDjvXcME__XT-LIxFrIrmolcthdDFr8N18sWAn_zyW1x72zuSQqtF2dC8Vsu4XiSnTujMu3IA05Vy3noH5hg4WVCH5Il7qoaedcFpCJLcXgkooWoSyX5WT9K2AP7qCGz5wvZsxgBJafZPE7GFRuocW_3aQ"
    }
];

// Fallback images
const imageStyleUrls = {
    truck: "https://lh3.googleusercontent.com/aida-public/AB6AXuCDHJAG7uuJa_JSQB5_xG0zuteE6KxlCT86bKNRZHpwOrhZ96t8CgQbibd3XT79ST5o5eO8JVdpx5Fr4t3yJUYvw5CLKuk-tQ7CEjteZAk5C0dhluK73Y0L8-KjIrBTlvy7SAI68trn2Hq2QhQcwrf0U4N95pgsGMz5aC2OgmHGu-YMYiACykBHUK82zH8O4WeM1kuCS0mrvtLVdvQfB8kn8mhvQ2qQW62w5mRC4hSfugndrVjfDrCpgA",
    van: "https://lh3.googleusercontent.com/aida-public/AB6AXuDcWcYWLNtM77e_jzZ3OrtDdchlICwZJojQepvr8m_u7duhrYAm8fUVwwPMwr6FUP-yj-60-0OyBo_9txaZJTo_7sQU82NR9KnOxTMum6QExH-OjuhTZY2kS9smVBHqOy9-BPwgMjTqWIENXygJTEDllFx5CWKSBn964nVhzf0S7nYyhKVSzbTzZtXpbx_Jdtm-DkexIehiebZM2Kw5YmVRPm6w6jfNc9zFYeyRg59w2vXdNIuW58SuOg",
    flatbed: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNDmNnjd-Ami7joiQpWvlsCE9E3l2WmhrOIHNjRtmAvk1i9TvhVzamXebgVBYfL5NwiQhm-gptLdELQcKesC5vtl3fc4bY8RTtLzsAtwdLwWiRLcK3TY-LZCpFXWcrqtaJPFLgxAZJ3nTsdiMyPgwzyRK6PpWtD_I48weiuKR9bTgBngY1lcZKHeIhnE2AnbIIxhVJJyzyynGrabL8c39uZREA348d3uoVQEfmUhg1--SGw1R3KkAbMw"
};

// Drivers List (Regional flags: US vs IN)
const defaultDrivers = [
    { id: "D01", name: "Rahul Sharma", status: "Available", license: "Heavy Commercial", rating: 4.8, region: "IN" },
    { id: "D02", name: "Karan Das", status: "On Trip", license: "Light Commercial", rating: 4.6, region: "IN" },
    { id: "D03", name: "Amit Patel", status: "Available", license: "Heavy Commercial", rating: 4.9, region: "IN" },
    { id: "D04", name: "Sarah Jenkins", status: "Available", license: "Class A Commercial", rating: 4.8, region: "US" },
    { id: "D05", name: "Marcus Thorne", status: "On Trip", license: "Class B Commercial", rating: 4.5, region: "US" },
    { id: "D06", name: "Elena Rossi", status: "Available", license: "Class A Commercial", rating: 4.7, region: "US" }
];

// Fuel Logs mock
const defaultFuelLogs = [
    { date: "2026-07-10", plate: "TX-9042-HG", volume: 420.5, cost: 689.62, location: "Shell Express #104" },
    { date: "2026-07-09", plate: "MH-04-AB-1234", volume: 85.0, cost: 139.40, location: "Bharat Petroleum Mumbai" },
    { date: "2026-07-08", plate: "KA-01-ME-1120", volume: 62.0, cost: 98.50, location: "HP Retail Bengaluru" }
];

// Global State
let usVehicles = [];
let inVehicles = [];
let drivers = [];
let fuelLogs = [];
let activeTab = "us-vehicles";
let activeLogsTab = "fuel";
let usFilterStatus = null;
let inFilterStatus = null;
let usSearchQuery = "";
let inSearchQuery = "";
let liveTrackingInterval = null;
let assignTargetPlate = null;
let assignTargetRegion = null;

// DOM Initialization
document.addEventListener("DOMContentLoaded", () => {
    // Check if user authenticated, if not, redirect to login.html
    const authenticated = sessionStorage.getItem("logisticspro_authenticated");
    if (!authenticated) {
        window.location.href = "login.html";
        return;
    }

    // Session RBAC loading
    const sessionRole = sessionStorage.getItem("logisticspro_role") || "manager";
    const sessionName = sessionStorage.getItem("logisticspro_name") || "Alex Thompson";
    const displayRole = document.getElementById("user-display-role");
    const displayBadge = document.getElementById("role-display-badge");
    const displayName = document.getElementById("user-display-name");

    displayName.innerText = sessionName;
    if (sessionRole === "driver") {
        displayRole.innerText = "Driver";
        displayBadge.innerText = "Driver Access";
    } else if (sessionRole === "dispatcher") {
        displayRole.innerText = "Dispatcher";
        displayBadge.innerText = "Dispatch Console";
    } else {
        displayRole.innerText = "Fleet Manager";
        displayBadge.innerText = "Manager Console";
    }

    // Load arrays from Local Storage
    usVehicles = loadFromStorage("logisticspro_us_vehicles", defaultUsVehicles);
    inVehicles = loadFromStorage("logisticspro_in_vehicles", defaultInVehicles);
    drivers = loadFromStorage("logisticspro_drivers", defaultDrivers);
    fuelLogs = loadFromStorage("logisticspro_fuel_logs", defaultFuelLogs);

    // Initial render
    refreshAll();
});

// Storage helper
function loadFromStorage(key, defaults) {
    const val = localStorage.getItem(key);
    if (val) return JSON.parse(val);
    localStorage.setItem(key, JSON.stringify(defaults));
    return [...defaults];
}

function saveAllToStorage() {
    localStorage.setItem("logisticspro_us_vehicles", JSON.stringify(usVehicles));
    localStorage.setItem("logisticspro_in_vehicles", JSON.stringify(inVehicles));
    localStorage.setItem("logisticspro_drivers", JSON.stringify(drivers));
    localStorage.setItem("logisticspro_fuel_logs", JSON.stringify(fuelLogs));
}

// Refresh Operations Dashboard
function refreshAll() {
    calculateStats("US");
    calculateStats("IN");
    renderVehiclesGrid("US");
    renderVehiclesGrid("IN");
    renderFuelLogsTable();
    renderMaintenanceGrid();
    renderDriversList();
    populateUnifiedDropdowns();
}

// Calculate Fleet Stats
function calculateStats(region) {
    const list = region === "US" ? usVehicles : inVehicles;
    
    let avail = 0, trip = 0, shop = 0, active = 0;
    
    list.forEach(v => {
        if (v.status === "Available") avail++;
        else if (v.status === "On Trip") trip++;
        else if (v.status === "In Shop") shop++;
        
        if (v.status !== "Retired") active++;
    });

    const prefix = region.toLowerCase();
    document.getElementById(`${prefix}-stats-available`).innerText = avail;
    document.getElementById(`${prefix}-stats-ontrip`).innerText = trip;
    document.getElementById(`${prefix}-stats-inshop`).innerText = shop;
    document.getElementById(`${prefix}-stats-total`).innerText = list.length;
    document.getElementById(`${prefix}-active-count-label`).innerText = active;
}

// Nav Tab Routing
function switchTab(tabId) {
    activeTab = tabId;
    
    // Hide all view tabs
    document.querySelectorAll(".tab-view").forEach(tab => tab.classList.add("hidden"));
    
    // Show active tab
    const view = document.getElementById(`view-${tabId}`);
    if (view) view.classList.remove("hidden");

    // Reset styles on sidebar nav buttons
    document.querySelectorAll("#sidebar-menu nav button").forEach(btn => {
        btn.classList.remove("text-primary", "font-bold", "bg-secondary-container/10");
        btn.classList.add("text-on-surface-variant");
    });
    
    // Reset styles on mobile bottom navigation
    document.querySelectorAll("nav.md\\:hidden button").forEach(btn => {
        btn.classList.remove("bg-secondary-container", "text-on-secondary-container", "rounded-full", "px-4", "py-1", "scale-95");
        btn.classList.add("text-on-surface-variant");
    });

    // Mark current buttons active
    const activeSidebarBtn = document.getElementById(`nav-${tabId}`);
    if (activeSidebarBtn) {
        activeSidebarBtn.classList.remove("text-on-surface-variant");
        activeSidebarBtn.classList.add("text-primary", "font-bold", "bg-secondary-container/10");
    }

    const activeMobileBtn = document.getElementById(`mobile-nav-${tabId}`);
    if (activeMobileBtn) {
        activeMobileBtn.classList.remove("text-on-surface-variant");
        activeMobileBtn.classList.add("bg-secondary-container", "text-on-secondary-container", "rounded-full", "px-4", "py-1", "scale-95");
    }

    closeMobileSidebar();
}

// Toggle Logs sub-tabs
function switchLogsTab(subTab) {
    activeLogsTab = subTab;
    const fuelTabBtn = document.getElementById("btn-fuel-tab");
    const maintTabBtn = document.getElementById("btn-maint-tab");
    const fuelSub = document.getElementById("sub-logs-fuel");
    const maintSub = document.getElementById("sub-logs-maint");

    if (subTab === "fuel") {
        fuelSub.classList.remove("hidden");
        maintSub.classList.add("hidden");
        fuelTabBtn.className = "px-6 py-2 rounded-full bg-secondary-container text-on-secondary-container font-bold text-xs";
        maintTabBtn.className = "px-6 py-2 rounded-full text-on-surface-variant border border-outline-variant/30 text-xs font-bold hover:bg-surface-variant";
    } else {
        fuelSub.classList.add("hidden");
        maintSub.classList.remove("hidden");
        maintTabBtn.className = "px-6 py-2 rounded-full bg-secondary-container text-on-secondary-container font-bold text-xs";
        fuelTabBtn.className = "px-6 py-2 rounded-full text-on-surface-variant border border-outline-variant/30 text-xs font-bold hover:bg-surface-variant";
        renderMaintenanceGrid();
    }
}

// Render Fleet Grid
function renderVehiclesGrid(region) {
    const isUs = region === "US";
    const list = isUs ? usVehicles : inVehicles;
    const grid = document.getElementById(isUs ? "us-vehicle-grid" : "in-vehicle-grid");
    const query = (isUs ? usSearchQuery : inSearchQuery).toLowerCase();
    const filter = isUs ? usFilterStatus : inFilterStatus;

    grid.innerHTML = "";

    const filtered = list.filter(v => {
        const matchesStatus = filter ? (v.status === filter) : true;
        const matchesSearch = v.plate.toLowerCase().includes(query) ||
                              v.model.toLowerCase().includes(query) ||
                              v.type.toLowerCase().includes(query);
        return matchesStatus && matchesSearch;
    });

    filtered.forEach(vehicle => {
        const card = document.createElement("div");
        card.className = "glass-card rounded-xl overflow-hidden flex flex-col group hover:border-secondary transition-all duration-300";

        let statusClass = "status-available";
        if (vehicle.status === "On Trip") statusClass = "status-ontrip";
        else if (vehicle.status === "In Shop") statusClass = "status-inshop";
        else if (vehicle.status === "Retired") statusClass = "status-retired";

        let actionsHtml = "";
        let cardOpacity = vehicle.status === "Retired" ? "opacity-60" : "";
        let grayscaleClass = vehicle.status === "Retired" ? "grayscale" : "";

        if (vehicle.status === "Available") {
            actionsHtml = `
                <button onclick="openDiagnostics('${vehicle.plate}', '${region}')" class="text-xs font-bold text-secondary px-3 py-1.5 rounded hover:bg-secondary/10 transition-colors">DIAGNOSTICS</button>
                <button onclick="openAssign('${vehicle.plate}', '${region}')" class="text-xs font-bold bg-secondary text-on-secondary px-4 py-1.5 rounded hover:opacity-90 transition-opacity">ASSIGN</button>
            `;
        } else if (vehicle.status === "On Trip") {
            actionsHtml = `
                <span class="text-[11px] text-on-surface-variant flex items-center gap-xs">
                    <span class="material-symbols-outlined text-[12px]">location_on</span>
                    ${vehicle.destination || 'In Route'}
                </span>
                <button onclick="openLiveTracking('${vehicle.plate}', '${region}')" class="text-xs font-bold text-secondary px-3 py-1.5 rounded hover:bg-secondary/10 transition-colors">TRACK LIVE</button>
            `;
        } else if (vehicle.status === "In Shop") {
            actionsHtml = `
                <span class="text-[11px] text-amber-400 font-bold uppercase tracking-wider">${vehicle.service || 'Repair Intake'}</span>
                <button onclick="openServiceLogs('${vehicle.plate}', '${region}')" class="text-xs font-bold text-secondary px-3 py-1.5 rounded hover:bg-secondary/10 transition-colors">VIEW LOGS</button>
            `;
        } else if (vehicle.status === "Retired") {
            actionsHtml = `
                <span class="text-[11px] text-outline uppercase font-semibold">REASON: ${vehicle.reason || 'Terminated'}</span>
                <button onclick="archiveVehicle('${vehicle.plate}', '${region}')" class="text-xs font-bold text-on-surface-variant px-3 py-1.5 rounded hover:bg-surface-variant transition-colors">DELETE</button>
            `;
        }

        const mileageSuffix = isUs ? "mi" : "km";

        let metricHtml = `
            <div>
                <p class="text-outline uppercase text-[9px]">Mileage</p>
                <p class="text-on-surface font-semibold text-xs">${vehicle.mileage.toLocaleString()} ${mileageSuffix}</p>
            </div>
        `;
        if (vehicle.status === "On Trip") {
            metricHtml = `
                <div>
                    <p class="text-outline uppercase text-[9px]">ETA</p>
                    <p class="text-on-surface font-semibold text-xs">${vehicle.eta || 'Calculating...'}</p>
                </div>
            `;
        } else if (vehicle.status === "In Shop") {
            metricHtml = `
                <div>
                    <p class="text-outline uppercase text-[9px]">Est Comp</p>
                    <p class="text-on-surface font-semibold text-xs">${vehicle.estComp || 'TBD'}</p>
                </div>
            `;
        } else if (vehicle.status === "Retired") {
            metricHtml = `
                <div>
                    <p class="text-outline uppercase text-[9px]">Life total</p>
                    <p class="text-on-surface font-semibold text-xs">${vehicle.mileage.toLocaleString()} ${mileageSuffix}</p>
                </div>
            `;
        }

        card.innerHTML = `
            <div class="p-md border-b border-outline-variant/30 flex justify-between items-center bg-surface-container-lowest/50">
                <div class="flex items-center gap-sm">
                    <span class="material-symbols-outlined text-secondary">local_shipping</span>
                    <span class="font-data-mono text-data-mono tracking-wider">${vehicle.plate}</span>
                </div>
                <span class="${statusClass} px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">${vehicle.status}</span>
            </div>
            <div class="p-md flex gap-md ${cardOpacity}">
                <div class="w-24 h-24 rounded-lg bg-surface-container flex-shrink-0 overflow-hidden border border-outline-variant ${grayscaleClass}">
                    <img class="w-full h-full object-cover" alt="${vehicle.model}" src="${vehicle.image}"/>
                </div>
                <div class="flex-1 space-y-2">
                    <div>
                        <h3 class="text-on-surface font-bold text-sm leading-tight">${vehicle.model}</h3>
                        <p class="text-xs text-on-surface-variant">${vehicle.type}</p>
                    </div>
                    <div class="grid grid-cols-2 gap-2 text-[11px] font-label-caps text-outline uppercase">
                        <div>
                            <p class="text-outline uppercase text-[9px]">Fuel</p>
                            <p class="text-on-surface font-semibold text-xs">${vehicle.fuel}</p>
                        </div>
                        ${metricHtml}
                    </div>
                </div>
            </div>
            <div class="mt-auto p-md bg-surface-variant/10 flex justify-between items-center border-t border-outline-variant/20">
                ${actionsHtml}
            </div>
        `;
        grid.appendChild(card);
    });

    // Dashed Intake Card at the bottom of the grid
    const registerCard = document.createElement("button");
    registerCard.className = "border-2 border-dashed border-outline-variant rounded-xl flex flex-col items-center justify-center p-xl gap-md group hover:bg-surface-container-high hover:border-secondary transition-all duration-300 min-h-[190px]";
    registerCard.onclick = () => {
        document.getElementById("add-vehicle-region-select").value = region;
        openModal("add-vehicle-modal");
    };
    registerCard.innerHTML = `
        <div class="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container group-hover:scale-110 transition-transform">
            <span class="material-symbols-outlined">add</span>
        </div>
        <div class="text-center">
            <p class="font-bold text-on-surface">Register New Vehicle</p>
            <p class="text-xs text-on-surface-variant">Add new unit to active registry</p>
        </div>
    `;
    grid.appendChild(registerCard);
}

// Add vehicle intake logic
function handleRegisterVehicle(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const plate = formData.get("plate").toUpperCase();
    const region = formData.get("region");

    const targetList = region === "US" ? usVehicles : inVehicles;
    const otherList = region === "US" ? inVehicles : usVehicles;

    if (targetList.some(v => v.plate === plate) || otherList.some(v => v.plate === plate)) {
        showToast("Error: Plate already registered in the registry.");
        return;
    }

    const imageStyle = formData.get("imageStyle");
    const newUnit = {
        plate: plate,
        model: formData.get("model"),
        type: formData.get("type"),
        fuel: formData.get("fuel"),
        mileage: parseInt(formData.get("mileage")),
        status: formData.get("status"),
        imageStyle: imageStyle,
        image: imageStyleUrls[imageStyle] || imageStyleUrls.truck
    };

    if (newUnit.status === "On Trip") {
        newUnit.destination = region === "US" ? "Dallas Hub" : "Pune Depot";
        newUnit.eta = "4h 15m";
    } else if (newUnit.status === "In Shop") {
        newUnit.service = "Diagnostics inspection";
        newUnit.estComp = "Jun 18";
    }

    targetList.push(newUnit);
    saveAllToStorage();
    refreshAll();

    closeModal("add-vehicle-modal");
    e.target.reset();
    showToast(`Vehicle ${plate} registered successfully in ${region} fleet.`);
}

// Populate Unified dispatch drop-downs (merged US & India)
function populateUnifiedDropdowns() {
    const vSelect = document.getElementById("dispatch-vehicle-select");
    const dSelect = document.getElementById("dispatch-driver-select");

    if (!vSelect || !dSelect) return;

    vSelect.innerHTML = "<option value=''>Choose Unit...</option>";
    dSelect.innerHTML = "<option value=''>Assign Personnel...</option>";

    // Populate available vehicles from BOTH registries
    const usAvail = usVehicles.filter(v => v.status === "Available").map(v => ({...v, region: "US"}));
    const inAvail = inVehicles.filter(v => v.status === "Available").map(v => ({...v, region: "IN"}));
    const allVehicles = [...usAvail, ...inAvail];

    allVehicles.forEach(v => {
        const opt = document.createElement("option");
        opt.value = `${v.plate}:${v.region}`;
        opt.innerText = `${v.plate} [${v.model}] - Hub: [${v.region}]`;
        vSelect.appendChild(opt);
    });

    // Populate available drivers from both registries
    const avDrivers = drivers.filter(d => d.status === "Available");
    avDrivers.forEach(d => {
        const opt = document.createElement("option");
        opt.value = d.id;
        opt.innerText = `${d.name} (${d.license}) - Hub: [${d.region}]`;
        dSelect.appendChild(opt);
    });
}

// Update dispatch planned distance details dynamically depending on selected vehicle region
function updateDispatchCargoWeight(select) {
    const rawVal = select.value;
    const distanceEl = document.getElementById("dispatch-planned-distance");
    const fuelEl = document.getElementById("dispatch-planned-fuel");
    const tollsEl = document.getElementById("dispatch-planned-tolls");
    const sourceEl = document.getElementById("dispatch-source");
    const destinationEl = document.getElementById("dispatch-destination");
    const slider = document.getElementById("dispatch-weight-slider");

    if (!rawVal) return;

    const [plate, region] = rawVal.split(":");
    if (region === "US") {
        distanceEl.innerText = "1,248.4 KM / 775 mi";
        fuelEl.innerText = "312.0 L / 82 gal";
        tollsEl.innerText = "$185.00";
        sourceEl.value = "Houston Terminal (TX)";
        destinationEl.value = "Dallas Hub";
        slider.value = "18.5";
        slider.nextElementSibling.innerText = "18.5 T";
    } else {
        distanceEl.innerText = "152.4 KM";
        fuelEl.innerText = "38.5 L";
        tollsEl.innerText = "₹850.00";
        sourceEl.value = "Mumbai Terminal 1";
        destinationEl.value = "Pune Depot";
        slider.value = "12";
        slider.nextElementSibling.innerText = "12 T";
    }
}

// Unified Dispatch trip authorizer
function handleDispatchSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const rawVehicleVal = formData.get("vehicle");
    const driverId = formData.get("driver");
    const destination = formData.get("destination");

    if (!rawVehicleVal || !driverId) {
        showToast("Error: Select a vehicle and assign a driver.");
        return;
    }

    const [plate, region] = rawVehicleVal.split(":");
    const list = region === "US" ? usVehicles : inVehicles;
    const vehicle = list.find(v => v.plate === plate);
    const driver = drivers.find(d => d.id === driverId);

    if (vehicle && driver) {
        // Set trip properties
        vehicle.status = "On Trip";
        vehicle.destination = destination;
        vehicle.eta = region === "US" ? "12h 30m" : "3h 45m";

        // Assign driver
        driver.status = "On Trip";

        saveAllToStorage();
        refreshAll();

        e.target.reset();
        showToast(`Trip authorized! ${vehicle.model} dispatched to ${destination} with driver ${driver.name}.`);
    }
}

// Render Fuel Logs Table
function renderFuelLogsTable() {
    const tbody = document.getElementById("fuel-logs-table-body");
    const totalFuelEl = document.getElementById("record-total-fuel");
    if (!tbody) return;

    tbody.innerHTML = "";
    let totalLiters = 0;

    fuelLogs.forEach(log => {
        totalLiters += parseFloat(log.volume);
        const tr = document.createElement("tr");
        tr.className = "hover:bg-slate-900/40 text-xs";
        tr.innerHTML = `
            <td class="p-3 font-data-mono">${log.date}</td>
            <td class="p-3 font-bold text-on-surface">${log.plate}</td>
            <td class="p-3">${log.volume.toLocaleString()} L</td>
            <td class="p-3 text-[#afc6ff] font-semibold">$${log.cost.toFixed(2)}</td>
            <td class="p-3 text-right text-on-surface-variant">${log.location}</td>
        `;
        tbody.appendChild(tr);
    });

    if (totalFuelEl) {
        totalFuelEl.innerText = `${totalLiters.toLocaleString()} L`;
    }
}

// Add Fuel Log submit
function handleFuelSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newLog = {
        date: new Date().toISOString().split("T")[0],
        plate: formData.get("vehicleId").toUpperCase(),
        volume: parseFloat(formData.get("volume")),
        cost: parseFloat(formData.get("cost")),
        location: formData.get("location")
    };

    fuelLogs.unshift(newLog);
    saveAllToStorage();
    refreshAll();

    closeModal("add-fuel-modal");
    e.target.reset();
    showToast(`Fuel log added for vehicle ${newLog.plate}`);
}

// Render Maintenance Intake List
function renderMaintenanceGrid() {
    const grid = document.getElementById("maintenance-cards-list");
    const recordInShopEl = document.getElementById("record-in-shop");
    if (!grid) return;

    grid.innerHTML = "";
    
    const usShop = usVehicles.filter(v => v.status === "In Shop").map(v => ({...v, region: "US"}));
    const inShop = inVehicles.filter(v => v.status === "In Shop").map(v => ({...v, region: "IN"}));
    const allShop = [...usShop, ...inShop];

    if (recordInShopEl) {
        recordInShopEl.innerText = String(allShop.length).padStart(2, "0");
    }

    if (allShop.length === 0) {
        grid.innerHTML = `
            <div class="col-span-full border border-dashed border-outline-variant/30 rounded-xl p-lg text-center opacity-60">
                <span class="material-symbols-outlined text-4xl mb-2 text-outline">engineering</span>
                <p class="font-bold">No vehicles in maintenance</p>
                <p class="text-xs">All fleet assets are running optimal.</p>
            </div>
        `;
        return;
    }

    allShop.forEach(v => {
        const card = document.createElement("div");
        card.className = "bg-surface-container border border-outline-variant p-md rounded-xl space-y-md flex flex-col";
        card.innerHTML = `
            <div class="flex justify-between items-center border-b border-outline-variant/20 pb-2">
                <div class="flex items-center gap-xs">
                    <span class="material-symbols-outlined text-[#afc6ff] text-sm">build</span>
                    <span class="font-data-mono text-xs font-semibold">${v.plate}</span>
                </div>
                <span class="bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2 py-0.5 rounded text-[10px] uppercase font-bold">In Shop</span>
            </div>
            <div>
                <h4 class="font-bold text-on-surface text-sm">${v.model}</h4>
                <p class="text-xs text-on-surface-variant mt-1">Job: <span class="text-on-surface font-semibold">${v.service || 'Routine Diagnostics'}</span></p>
            </div>
            <div class="grid grid-cols-2 gap-2 text-[10px] font-label-caps text-outline border-t border-outline-variant/10 pt-2 uppercase">
                <div>
                    <p class="text-[9px]">Est Comp</p>
                    <p class="text-on-surface font-semibold">${v.estComp || 'Calculating'}</p>
                </div>
                <div>
                    <p class="text-[9px]">Tech Assigned</p>
                    <p class="text-on-surface font-semibold">R. Sharma</p>
                </div>
            </div>
            <div class="flex justify-end gap-2 pt-2 border-t border-outline-variant/10 mt-auto">
                <button onclick="releaseFromShop('${v.plate}', '${v.region}')" class="w-full bg-secondary-container hover:bg-secondary text-on-secondary-container hover:text-on-secondary py-1.5 rounded text-xs font-bold transition-all">RELEASE UNIT</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Intake Select loader
function populateMaintIntakeSelect() {
    const select = document.getElementById("maint-vehicle-select");
    if (!select) return;

    select.innerHTML = "";
    
    const usAvail = usVehicles.filter(v => v.status === "Available").map(v => ({...v, region: "US"}));
    const inAvail = inVehicles.filter(v => v.status === "Available").map(v => ({...v, region: "IN"}));
    const allAvail = [...usAvail, ...inAvail];

    if (allAvail.length === 0) {
        const opt = document.createElement("option");
        opt.innerText = "No available vehicles";
        opt.disabled = true;
        select.appendChild(opt);
    } else {
        allAvail.forEach(v => {
            const opt = document.createElement("option");
            opt.value = `${v.plate}:${v.region}`;
            opt.innerText = `${v.plate} - ${v.model} [${v.region}]`;
            select.appendChild(opt);
        });
    }
}

// Open Maintenance Intake Modal
const originalOpenModal = openModal;
openModal = function(modalId) {
    if (modalId === "add-maint-modal") {
        populateMaintIntakeSelect();
    }
    originalOpenModal(modalId);
}

// Submit Maintenance Intake
function handleMaintSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const rawVal = formData.get("plate");
    if (!rawVal || rawVal === "No available vehicles") {
        showToast("Error: No valid vehicle selected.");
        return;
    }

    const [plate, region] = rawVal.split(":");
    const list = region === "US" ? usVehicles : inVehicles;
    const vehicle = list.find(v => v.plate === plate);

    if (vehicle) {
        vehicle.status = "In Shop";
        vehicle.service = formData.get("service");
        vehicle.estComp = formData.get("estComp");
        
        saveAllToStorage();
        refreshAll();

        closeModal("add-maint-modal");
        e.target.reset();
        showToast(`Vehicle ${plate} dispatched to diagnostics shop.`);
    }
}

// Release vehicle from maintenance back to Available
function releaseFromShop(plate, region) {
    const list = region === "US" ? usVehicles : inVehicles;
    const vehicle = list.find(v => v.plate === plate);
    if (vehicle) {
        vehicle.status = "Available";
        delete vehicle.service;
        delete vehicle.estComp;

        saveAllToStorage();
        refreshAll();
        showToast(`Vehicle ${plate} released and available for dispatches.`);
    }
}

// Render Drivers list
function renderDriversList() {
    const dir = document.getElementById("drivers-directory-list");
    if (!dir) return;

    dir.innerHTML = "";
    drivers.forEach(driver => {
        const isAvail = driver.status === "Available";
        const badgeClass = isAvail ? "status-available" : "status-ontrip";

        const card = document.createElement("div");
        card.className = "glass-card p-md rounded-xl flex items-center justify-between";
        card.innerHTML = `
            <div class="flex items-center gap-md">
                <div class="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container font-bold border border-outline-variant/30 text-sm">
                    ${driver.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                    <h3 class="font-bold text-on-surface text-sm leading-tight">${driver.name}</h3>
                    <p class="text-xs text-on-surface-variant">${driver.license} • Rating: ⭐ ${driver.rating} • Hub: [${driver.region}]</p>
                </div>
            </div>
            <span class="${badgeClass} px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest">${driver.status}</span>
        `;
        dir.appendChild(card);
    });
}

// Diagnostics Dialog
function openDiagnostics(plate, region) {
    const list = region === "US" ? usVehicles : inVehicles;
    const v = list.find(item => item.plate === plate);
    if (!v) return;

    document.getElementById("diagnostics-title").innerText = `Vehicle Diagnostics - ${v.model}`;

    const temp = Math.floor(Math.random() * (98 - 85) + 85);
    const battery = Math.floor(Math.random() * (100 - 88) + 88);
    const oil = Math.floor(Math.random() * (95 - 75) + 75);

    document.getElementById("diag-temp").innerText = `${temp}°C`;
    document.getElementById("diag-battery").innerText = `${battery}%`;
    document.getElementById("diag-oil").innerText = `${oil}%`;
    document.getElementById("diag-tyres").innerText = `${Math.floor(Math.random() * (35-30)+30)} PSI / ${Math.floor(Math.random() * (35-30)+30)} PSI`;

    openModal("diagnostics-modal");
}

// Live tracking route drawer
function openLiveTracking(plate, region) {
    const list = region === "US" ? usVehicles : inVehicles;
    const v = list.find(item => item.plate === plate);
    if (!v) return;

    document.getElementById("tracking-title").innerText = `Live Tracking - ${v.model}`;
    
    const startLoc = region === "US" ? "Houston Terminal" : "Mumbai Depot";
    const endLoc = region === "US" ? "Dallas Hub" : "Pune Depot";
    
    const svgText = document.querySelectorAll("#tracking-modal svg text");
    if (svgText[0]) svgText[0].innerText = startLoc;
    if (svgText[1]) svgText[1].innerText = endLoc;

    openModal("tracking-modal");

    const speedEl = document.getElementById("tracking-speed");
    const coordsEl = document.getElementById("tracking-coords");
    const etaEl = document.getElementById("tracking-eta");
    const completedPath = document.getElementById("route-completed");
    const vehicleIcon = document.getElementById("map-vehicle-icon");

    let progressPercent = 0;
    completedPath.style.strokeDashoffset = 600;

    if (liveTrackingInterval) clearInterval(liveTrackingInterval);

    liveTrackingInterval = setInterval(() => {
        progressPercent += 0.5;
        if (progressPercent > 100) progressPercent = 0;

        const offset = 600 - (600 * (progressPercent / 100));
        completedPath.style.strokeDashoffset = offset;

        const startX = 50, endX = 600;
        const curX = startX + (endX - startX) * (progressPercent / 100);
        const curY = 160 + Math.sin(progressPercent * 0.15) * 50;

        vehicleIcon.setAttribute("transform", `translate(${curX - 50}, ${curY - 200})`);

        const speed = Math.floor(Math.random() * (75 - 55) + 55);
        speedEl.innerText = `${speed} ${region === "US" ? 'mph' : 'km/h'}`;

        const baseLat = region === "US" ? 29.7604 : 19.0760;
        const baseLon = region === "US" ? -95.3698 : 72.8777;
        const targetLat = region === "US" ? 30.2672 : 18.5204;
        const targetLon = region === "US" ? -97.7431 : 73.8567;

        const lat = (baseLat + (targetLat - baseLat) * (progressPercent / 100)).toFixed(4);
        const lon = (baseLon + (targetLon - baseLon) * (progressPercent / 100)).toFixed(4);
        coordsEl.innerText = `${lat}° N, ${lon}° E`;

        let minutesRemaining = Math.max(1, Math.floor(180 - (180 * (progressPercent / 100))));
        etaEl.innerText = `${Math.floor(minutesRemaining / 60)}h ${minutesRemaining % 60}m`;
    }, 300);
}

// Service maintenance history
function openServiceLogs(plate, region) {
    const list = region === "US" ? usVehicles : inVehicles;
    const v = list.find(item => item.plate === plate);
    if (!v) return;

    document.getElementById("logs-title").innerText = `Service Logs - ${v.model}`;
    const logList = document.getElementById("vehicle-logs-list");
    logList.innerHTML = "";

    const statusText = v.status === "In Shop" ? "In Progress" : "Completed";
    const serviceTitle = v.service || "Standard diagnostics overhaul";

    logList.innerHTML = `
        <div class="bg-surface p-sm rounded border border-outline-variant/20 flex justify-between items-center">
            <div>
                <p class="font-bold text-xs text-on-surface">${serviceTitle}</p>
                <p class="text-[10px] text-on-surface-variant">Technician Assigned: R. Sharma</p>
            </div>
            <div class="text-right">
                <span class="bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded text-[10px] uppercase font-bold">${statusText}</span>
                <p class="text-[9px] text-outline mt-1">Est: ${v.estComp || 'Jun 14'}</p>
            </div>
        </div>
        <div class="bg-surface p-sm rounded border border-outline-variant/20 flex justify-between items-center opacity-80">
            <div>
                <p class="font-bold text-xs text-on-surface">Brake Fluid & Hydraulics Overhaul</p>
                <p class="text-[10px] text-on-surface-variant">Technician Assigned: K. Das</p>
            </div>
            <div class="text-right">
                <span class="bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded text-[10px] uppercase font-bold">Completed</span>
                <p class="text-[9px] text-outline mt-1">May 20, 2026</p>
            </div>
        </div>
    `;

    openModal("logs-modal");
}

// Assign driver flow
function openAssign(plate, region) {
    assignTargetPlate = plate;
    assignTargetRegion = region;
    const select = document.getElementById("assign-driver-select");
    const destInput = document.getElementById("assign-destination-input");
    
    select.innerHTML = "";
    destInput.value = region === "US" ? "Dallas Hub (TX)" : "Pune Depot";

    const available = drivers.filter(d => d.status === "Available" && d.region === region);

    if (available.length === 0) {
        const option = document.createElement("option");
        option.innerText = "No drivers available for this region";
        option.disabled = true;
        select.appendChild(option);
    } else {
        available.forEach(d => {
            const option = document.createElement("option");
            option.value = d.id;
            option.innerText = `${d.name} (License: ${d.license})`;
            select.appendChild(option);
        });
    }

    openModal("assign-modal");
}

function submitAssignDriver() {
    const select = document.getElementById("assign-driver-select");
    const driverId = select.value;
    const destination = document.getElementById("assign-destination-input").value;

    if (!driverId || driverId.startsWith("No drivers")) {
        showToast("Error: Select an available driver.");
        return;
    }

    const list = assignTargetRegion === "US" ? usVehicles : inVehicles;
    const vehicle = list.find(v => v.plate === assignTargetPlate);
    const driver = drivers.find(d => d.id === driverId);

    if (vehicle && driver) {
        vehicle.status = "On Trip";
        vehicle.destination = destination;
        vehicle.eta = assignTargetRegion === "US" ? "6h 15m" : "3h 40m";

        driver.status = "On Trip";

        saveAllToStorage();
        refreshAll();

        closeModal("assign-modal");
        showToast(`Driver ${driver.name} assigned to ${vehicle.plate} for dispatch to ${destination}.`);
    }
}

// Delete Vehicle
function archiveVehicle(plate, region) {
    if (confirm(`Confirm deletion of vehicle ${plate} from the fleet registry?`)) {
        if (region === "US") {
            usVehicles = usVehicles.filter(v => v.plate !== plate);
        } else {
            inVehicles = inVehicles.filter(v => v.plate !== plate);
        }
        
        saveAllToStorage();
        refreshAll();
        showToast(`Vehicle ${plate} deleted.`);
    }
}

// Search registries
function handleSearch(e, region) {
    if (region === "US") {
        usSearchQuery = e.target.value;
        renderVehiclesGrid("US");
    } else {
        inSearchQuery = e.target.value;
        renderVehiclesGrid("IN");
    }
}

// Status filters
function filterByStatus(status, region) {
    if (region === "US") {
        usFilterStatus = status;
        document.getElementById("us-clear-filter-btn").classList.remove("hidden");
        renderVehiclesGrid("US");
    } else {
        inFilterStatus = status;
        document.getElementById("in-clear-filter-btn").classList.remove("hidden");
        renderVehiclesGrid("IN");
    }
}

function clearStatusFilter(region) {
    if (region === "US") {
        usFilterStatus = null;
        document.getElementById("us-clear-filter-btn").classList.add("hidden");
        renderVehiclesGrid("US");
    } else {
        inFilterStatus = null;
        document.getElementById("in-clear-filter-btn").classList.add("hidden");
        renderVehiclesGrid("IN");
    }
}

// Mobile sidebar controls
function toggleMobileSidebar() {
    const sidebar = document.getElementById("sidebar-menu");
    if (sidebar.classList.contains("hidden")) {
        sidebar.classList.remove("hidden");
        sidebar.classList.add("flex", "fixed", "inset-y-0", "left-0", "z-50", "w-72", "shadow-xl");
    } else {
        closeMobileSidebar();
    }
}

function closeMobileSidebar() {
    const sidebar = document.getElementById("sidebar-menu");
    if (sidebar && sidebar.classList.contains("fixed")) {
        sidebar.classList.add("hidden");
        sidebar.classList.remove("flex", "fixed", "inset-y-0", "left-0", "z-50", "w-72", "shadow-xl");
    }
}

// Notification system
function toggleNotificationBadge() {
    const badge = document.getElementById("notif-badge");
    if (badge) {
        badge.classList.toggle("hidden");
        showToast(badge.classList.contains("hidden") ? "All notifications marked read." : "Active dispatch warning alerts.");
    }
}

// Floating HUD Toast notifications
function showToast(msg) {
    const container = document.getElementById("toast-container");
    const toast = document.createElement("div");
    toast.className = "toast-msg bg-slate-900 border border-slate-700 text-on-surface text-xs font-semibold px-4 py-3 rounded-lg shadow-xl flex items-center gap-2 max-w-sm cursor-pointer";
    toast.innerHTML = `
        <span class="material-symbols-outlined text-secondary text-sm">info</span>
        <span>${msg}</span>
    `;

    toast.onclick = () => toast.remove();
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = "slideInRight 0.3s ease reverse forwards";
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}

// Modal dialog system helper
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove("hidden");
        void modal.offsetWidth;
        modal.classList.add("active");
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove("active");
        setTimeout(() => {
            modal.classList.add("hidden");
        }, 250);
    }

    if (modalId === "tracking-modal" && liveTrackingInterval) {
        clearInterval(liveTrackingInterval);
        liveTrackingInterval = null;
    }
}
