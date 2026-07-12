# Smart-Transport-Operations-Platform
:root {
  /* Colors */
  --bg-base: #0a0e1a;
  --bg-surface: rgba(18, 25, 47, 0.75);
  --bg-card: rgba(26, 36, 68, 0.55);
  --bg-card-hover: rgba(36, 50, 94, 0.7);
  
  --primary: #8b5cf6;       /* Violet */
  --primary-hover: #7c3aed;
  --primary-glow: rgba(139, 92, 246, 0.25);
  
  --secondary: #3b82f6;     /* Electric Blue */
  --secondary-glow: rgba(59, 130, 246, 0.2);
  
  --accent-success: #10b981; /* Emerald */
  --accent-warning: #f59e0b; /* Amber */
  --accent-danger: #ef4444;  /* Coral/Crimson */
  --accent-info: #06b6d4;    /* Cyan */
  
  --text-main: #f8fafc;
  --text-muted: #94a3b8;
  --text-dim: #64748b;
  
  --border-color: rgba(255, 255, 255, 0.07);
  --border-focus: rgba(139, 92, 246, 0.5);
  
  /* Styling details */
  --border-radius-sm: 8px;
  --border-radius-md: 14px;
  --border-radius-lg: 24px;
  --glass-blur: blur(16px);
  --shadow-sm: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 10px 15px -3px rgba(0, 0, 0, 0.2);
  --shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 0 20px 0 var(--primary-glow);
  --transition-fast: 0.15s ease;
  --transition-smooth: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
/* Base resets & styles */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background-color: var(--bg-base);
  color: var(--text-main);
  min-height: 100vh;
  overflow-x: hidden;
  line-height: 1.5;
  background-image: 
    radial-gradient(circle at 10% 20%, rgba(139, 92, 246, 0.08) 0%, transparent 40%),
    radial-gradient(circle at 90% 80%, rgba(59, 130, 246, 0.08) 0%, transparent 40%);
  background-attachment: fixed;
}
/* Shell Layout */
#app-shell {
  display: flex;
  min-height: 100vh;
}
.hidden {
  display: none !important;
}
/* Sidebar Styling */
.sidebar {
  width: 280px;
  background: var(--bg-surface);
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
  border-right: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  padding: 24px 16px;
}
.sidebar-brand {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 8px;
  margin-bottom: 32px;
}
.brand-icon {
  width: 42px;
  height: 42px;
  border-radius: var(--border-radius-md);
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 15px rgba(139, 92, 246, 0.4);
}
.brand-icon i {
  color: #fff;
  width: 22px;
  height: 22px;
}
.brand-text h2 {
  font-size: 1.15rem;
  font-weight: 800;
  letter-spacing: 0.5px;
  background: linear-gradient(135deg, #fff, #a78bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.brand-text span {
  font-size: 0.72rem;
  color: var(--text-muted);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.sidebar-menu {
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex-grow: 1;
}
.nav-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: transparent;
  border: none;
  border-radius: var(--border-radius-md);
  color: var(--text-muted);
  font-family: inherit;
  font-size: 0.92rem;
  font-weight: 500;
  cursor: pointer;
  text-align: left;
  transition: var(--transition-smooth);
  width: 100%;
}
.nav-item i {
  width: 18px;
  height: 18px;
  transition: var(--transition-fast);
}
.nav-item:hover {
  color: var(--text-main);
  background: rgba(255, 255, 255, 0.03);
}
.nav-item.active {
  color: #fff;
  background: linear-gradient(90deg, var(--primary-glow), rgba(139, 92, 246, 0.05));
  box-shadow: inset 3px 0 0 var(--primary);
}
.nav-item.active i {
  color: var(--primary);
  filter: drop-shadow(0 0 5px var(--primary));
}
.sidebar-footer {
  border-top: 1px solid var(--border-color);
  padding-top: 20px;
  margin-top: auto;
}
.user-profile {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px;
  margin-bottom: 16px;
}
.user-avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--secondary), var(--primary));
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: #fff;
  font-size: 0.95rem;
  box-shadow: 0 4px 10px rgba(59, 130, 246, 0.3);
}
.user-info h4 {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-main);
}
.user-info span {
  font-size: 0.75rem;
  color: var(--text-muted);
  font-weight: 500;
}
.logout-btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px;
  background: rgba(239, 68, 68, 0.08);
  border: 1px solid rgba(239, 68, 68, 0.15);
  border-radius: var(--border-radius-md);
  color: var(--accent-danger);
  font-family: inherit;
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition-smooth);
}
.logout-btn:hover {
  background: var(--accent-danger);
  color: #fff;
  box-shadow: 0 4px 12px rgba(239, 68, 68, 0.25);
}
/* Main Container */
.main-container {
  margin-left: 280px;
  flex-grow: 1;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
/* Top Bar */
.top-bar {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  border-bottom: 1px solid var(--border-color);
  background: rgba(10, 14, 26, 0.4);
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
  position: sticky;
  top: 0;
  z-index: 90;
}
.view-title h1 {
  font-size: 1.45rem;
  font-weight: 700;
  letter-spacing: -0.5px;
}
.view-title p {
  font-size: 0.8rem;
  color: var(--text-muted);
}
.top-bar-actions {
  display: flex;
  align-items: center;
  gap: 20px;
}
.notifications-bell {
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: var(--transition-fast);
  color: var(--text-muted);
}
.notifications-bell:hover {
  color: var(--text-main);
  background: var(--bg-card-hover);
}
.notifications-bell .badge {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 8px;
  height: 8px;
  background-color: var(--accent-warning);
  border-radius: 50%;
  box-shadow: 0 0 5px var(--accent-warning);
}
.current-time {
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--text-muted);
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  padding: 8px 16px;
  border-radius: 30px;
}
/* Content Area */
.content-view {
  padding: 40px;
  flex-grow: 1;
  overflow-y: auto;
}
/* Auth Pages (Login Layout) */
.login-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
}
.login-card {
  width: 100%;
  max-width: 450px;
  background: var(--bg-surface);
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-lg);
  padding: 40px;
  box-shadow: var(--shadow-lg);
  animation: modalFadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.login-header {
  text-align: center;
  margin-bottom: 32px;
}
.login-logo {
  width: 56px;
  height: 56px;
  border-radius: var(--border-radius-md);
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 20px rgba(139, 92, 246, 0.4);
  margin-bottom: 16px;
}
.login-logo i {
  color: #fff;
  width: 28px;
  height: 28px;
}
.login-header h1 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 4px;
}
.login-header p {
  color: var(--text-muted);
  font-size: 0.88rem;
}
.login-tabs {
  display: flex;
  margin-bottom: 24px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-md);
  padding: 4px;
}
.tab-btn {
  flex: 1;
  background: transparent;
  border: none;
  color: var(--text-muted);
  font-family: inherit;
  font-size: 0.82rem;
  font-weight: 700;
  padding: 10px;
  cursor: pointer;
  border-radius: var(--border-radius-sm);
  transition: var(--transition-smooth);
}
.tab-btn:hover {
  color: var(--text-main);
}
.tab-btn.active {
  background: var(--primary);
  color: #fff;
  box-shadow: 0 4px 12px var(--primary-glow);
}
.form-group {
  margin-bottom: 20px;
}
.form-group label {
  display: block;
  font-size: 0.82rem;
  font-weight: 600;
  margin-bottom: 8px;
  color: var(--text-muted);
}
.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}
.input-wrapper i {
  position: absolute;
  left: 14px;
  color: var(--text-dim);
  width: 16px;
  height: 16px;
  transition: var(--transition-fast);
}
.input-wrapper input,
.input-wrapper select,
.input-wrapper textarea {
  width: 100%;
  padding: 12px 14px 12px 42px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-md);
  color: #fff;
  font-family: inherit;
  font-size: 0.92rem;
  transition: var(--transition-smooth);
  outline: none;
}
.input-wrapper input:focus,
.input-wrapper select:focus,
.input-wrapper textarea:focus {
  border-color: var(--primary);
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 0 10px rgba(139, 92, 246, 0.15);
}
.input-wrapper input:focus + i,
.input-wrapper select:focus + i {
  color: var(--primary);
}
.submit-btn {
  width: 100%;
  padding: 12px;
  border-radius: var(--border-radius-md);
  border: none;
  font-family: inherit;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: var(--transition-smooth);
}
.btn-primary {
  background: var(--primary);
  color: #fff;
}
.btn-primary:hover {
  background: var(--primary-hover);
  box-shadow: 0 4px 14px var(--primary-glow);
}
.error-msg {
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.2);
  color: var(--accent-danger);
  padding: 10px 14px;
  border-radius: var(--border-radius-sm);
  font-size: 0.82rem;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.login-seed-info {
  margin-top: 24px;
  padding-top: 20px;
  border-top: 1px solid var(--border-color);
  font-size: 0.78rem;
  color: var(--text-dim);
}
.login-seed-info ul {
  list-style: none;
  margin-top: 6px;
}
.login-seed-info li {
  margin-bottom: 4px;
}
/* KPI Dashboard Cards */
.kpi-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  margin-bottom: 32px;
}
.kpi-card {
  background: var(--bg-card);
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-lg);
  padding: 24px;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  transition: var(--transition-smooth);
  cursor: pointer;
}
.kpi-card:hover {
  background: var(--bg-card-hover);
  transform: translateY(-4px);
  border-color: var(--border-focus);
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.15), 0 0 15px rgba(139, 92, 246, 0.1);
}
.kpi-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}
.kpi-title {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.kpi-icon-wrapper {
  width: 40px;
  height: 40px;
  border-radius: var(--border-radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
}
.kpi-icon-wrapper i {
  width: 20px;
  height: 20px;
}
/* Color codes for KPIs */
.kpi-blue .kpi-icon-wrapper { background: rgba(59, 130, 246, 0.1); color: var(--secondary); }
.kpi-green .kpi-icon-wrapper { background: rgba(16, 185, 129, 0.1); color: var(--accent-success); }
.kpi-orange .kpi-icon-wrapper { background: rgba(245, 158, 11, 0.1); color: var(--accent-warning); }
.kpi-red .kpi-icon-wrapper { background: rgba(239, 68, 68, 0.1); color: var(--accent-danger); }
.kpi-cyan .kpi-icon-wrapper { background: rgba(6, 182, 212, 0.1); color: var(--accent-info); }
.kpi-violet .kpi-icon-wrapper { background: var(--primary-glow); color: var(--primary); }
.kpi-value {
  font-size: 1.85rem;
  font-weight: 800;
  color: #fff;
  line-height: 1.1;
  margin-bottom: 4px;
}
.kpi-trend {
  font-size: 0.75rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 4px;
}
.kpi-trend.positive { color: var(--accent-success); }
.kpi-trend.negative { color: var(--accent-danger); }
.kpi-trend.neutral { color: var(--text-muted); }
/* Quick Action & Controls Row */
.view-actions-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-bottom: 24px;
  flex-wrap: wrap;
}
.filter-bar {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}
.filter-select {
  padding: 8px 16px;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  color: var(--text-main);
  border-radius: 30px;
  font-family: inherit;
  font-size: 0.82rem;
  font-weight: 600;
  cursor: pointer;
  outline: none;
  transition: var(--transition-fast);
}
.filter-select:focus {
  border-color: var(--primary);
  box-shadow: 0 0 8px var(--primary-glow);
}
.search-input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}
.search-input-wrapper i {
  position: absolute;
  left: 12px;
  width: 16px;
  height: 16px;
  color: var(--text-dim);
}
.search-input {
  padding: 8px 16px 8px 36px;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  color: #fff;
  border-radius: 30px;
  font-family: inherit;
  font-size: 0.82rem;
  outline: none;
  width: 240px;
  transition: var(--transition-smooth);
}
.search-input:focus {
  width: 320px;
  border-color: var(--primary);
  box-shadow: 0 0 8px var(--primary-glow);
}
.btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: var(--border-radius-md);
  border: none;
  font-family: inherit;
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition-smooth);
}
.btn-secondary {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  color: var(--text-main);
}
.btn-secondary:hover {
  background: var(--bg-card-hover);
  border-color: var(--text-muted);
}
.btn-action-primary {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: #fff;
  box-shadow: 0 4px 12px rgba(139, 92, 246, 0.25);
}
.btn-action-primary:hover {
  box-shadow: 0 4px 18px rgba(139, 92, 246, 0.4);
  transform: translateY(-1px);
}
/* Table Styling */
.table-container {
  background: var(--bg-surface);
  border-radius: var(--border-radius-lg);
  border: 1px solid var(--border-color);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  margin-bottom: 24px;
}
.table-wrapper {
  overflow-x: auto;
}
.custom-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  font-size: 0.88rem;
}
.custom-table th {
  background: rgba(255, 255, 255, 0.02);
  color: var(--text-muted);
  font-weight: 600;
  padding: 16px 20px;
  border-bottom: 1px solid var(--border-color);
  text-transform: uppercase;
  font-size: 0.72rem;
  letter-spacing: 0.5px;
}
.custom-table td {
  padding: 16px 20px;
  border-bottom: 1px solid var(--border-color);
  color: var(--text-main);
  font-weight: 500;
  transition: var(--transition-fast);
}
.custom-table tr:last-child td {
  border-bottom: none;
}
.custom-table tbody tr:hover td {
  background: rgba(255, 255, 255, 0.015);
}
/* Status Badges */
.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: capitalize;
}
.status-badge::before {
  content: '';
  width: 6px;
  height: 6px;
  border-radius: 50%;
}
.status-badge.available,
.status-badge.completed,
.status-badge.off-duty {
  background: rgba(16, 185, 129, 0.1);
  color: var(--accent-success);
}
.status-badge.available::before,
.status-badge.completed::before,
.status-badge.off-duty::before {
  background: var(--accent-success);
}
.status-badge.on-trip,
.status-badge.dispatched {
  background: rgba(59, 130, 246, 0.1);
  color: var(--secondary);
}
.status-badge.on-trip::before,
.status-badge.dispatched::before {
  background: var(--secondary);
}
.status-badge.in-shop,
.status-badge.pending,
.status-badge.draft {
  background: rgba(245, 158, 11, 0.1);
  color: var(--accent-warning);
}
.status-badge.in-shop::before,
.status-badge.pending::before,
.status-badge.draft::before {
  background: var(--accent-warning);
}
.status-badge.retired,
.status-badge.cancelled,
.status-badge.suspended {
  background: rgba(239, 68, 68, 0.1);
  color: var(--accent-danger);
}
.status-badge.retired::before,
.status-badge.cancelled::before,
.status-badge.suspended::before {
  background: var(--accent-danger);
}
/* Dashboard Analytics Grid */
.dashboard-analysis-section {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 24px;
  margin-top: 32px;
}
@media (max-width: 1024px) {
  .dashboard-analysis-section {
    grid-template-columns: 1fr;
  }
}
.chart-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-lg);
  padding: 24px;
}
.chart-card h3 {
  font-size: 1.05rem;
  font-weight: 700;
  margin-bottom: 20px;
}
.chart-container {
  height: 300px;
  position: relative;
}
/* Recent items list style */
.recent-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.recent-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-md);
  transition: var(--transition-fast);
}
.recent-item:hover {
  background: rgba(255, 255, 255, 0.04);
}
.recent-info h4 {
  font-size: 0.85rem;
  font-weight: 600;
}
.recent-info p {
  font-size: 0.75rem;
  color: var(--text-muted);
}
.recent-value {
  font-size: 0.85rem;
  font-weight: 700;
  text-align: right;
}
/* Global Modal Card Customization */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(5, 7, 13, 0.75);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
  animation: backdropFadeIn 0.25s ease-out;
}
.modal-card {
  width: 100%;
  max-width: 580px;
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  overflow: hidden;
  animation: modalScaleIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.modal-header {
  padding: 20px 24px;
  border-bottom: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.02);
}
.modal-header h3 {
  font-size: 1.15rem;
  font-weight: 700;
}
.modal-close {
  background: transparent;
  border: none;
  color: var(--text-muted);
  font-size: 1.75rem;
  line-height: 1;
  cursor: pointer;
  transition: var(--transition-fast);
}
.modal-close:hover {
  color: var(--text-main);
}
.modal-body {
  padding: 24px;
  max-height: 75vh;
  overflow-y: auto;
}
/* Form layouts within modal */
.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
@media (max-width: 560px) {
  .form-grid {
    grid-template-columns: 1fr;
  }
}
.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 24px;
}
/* Toast System */
.toast-container {
  position: fixed;
  bottom: 24px;
  right: 24px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 2000;
  max-width: 380px;
  width: 100%;
}
.toast {
  background: rgba(18, 25, 47, 0.9);
  backdrop-filter: blur(10px);
  border: 1px solid var(--border-color);
  border-left: 4px solid var(--primary);
  border-radius: var(--border-radius-md);
  padding: 16px;
  color: #fff;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  animation: toastSlideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  transition: var(--transition-smooth);
}
.toast.success { border-left-color: var(--accent-success); }
.toast.warning { border-left-color: var(--accent-warning); }
.toast.danger { border-left-color: var(--accent-danger); }
.toast-icon {
  margin-top: 2px;
}
.toast-success .toast-icon { color: var(--accent-success); }
.toast-warning .toast-icon { color: var(--accent-warning); }
.toast-danger .toast-icon { color: var(--accent-danger); }
.toast-message h4 {
  font-size: 0.88rem;
  font-weight: 700;
  margin-bottom: 2px;
}
.toast-message p {
  font-size: 0.8rem;
  color: var(--text-muted);
}
/* Reports/Analytics ROI Details */
.roi-card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}
.roi-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-lg);
  padding: 24px;
  display: flex;
  flex-direction: column;
}
.roi-badge {
  align-self: flex-start;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.88rem;
  font-weight: 700;
  margin-bottom: 16px;
}
.roi-badge.high { background: rgba(16, 185, 129, 0.1); color: var(--accent-success); }
.roi-badge.medium { background: rgba(245, 158, 11, 0.1); color: var(--accent-warning); }
.roi-badge.low { background: rgba(239, 68, 68, 0.1); color: var(--accent-danger); }
.roi-stat-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 0.82rem;
}
.roi-stat-row span:first-child {
  color: var(--text-muted);
}
.roi-stat-row span:last-child {
  font-weight: 600;
}
/* Animations */
@keyframes backdropFadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes modalFadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes modalScaleIn {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
}
@keyframes toastSlideIn {
  from { opacity: 0; transform: translateX(50px); }
  to { opacity: 1; transform: translateX(0); }
}
/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
::-webkit-scrollbar-track {
  background: var(--bg-base);
}
::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.2);
}
