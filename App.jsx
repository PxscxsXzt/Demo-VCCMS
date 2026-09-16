import React, { useState } from 'react';
import { useAuth } from './context/AuthContext';

import Sidebar from './components/layout/Sidebar';
import Topbar from './components/layout/Topbar';
import ToastContainer from './components/common/ToastContainer';

// Import explicitly separated Page Components
import DashboardPage from './pages/DashboardPage';
import MainInventoryPage from './pages/MainInventoryPage';
import SubInventoryPage from './pages/SubInventoryPage';
import VaccineReceivePage from './pages/VaccineReceivePage';
import RequisitionCreatePage from './pages/RequisitionCreatePage';
import RequisitionApprovePage from './pages/RequisitionApprovePage';
import DispenseAndWastagePage from './pages/DispenseAndWastagePage';
import TemperatureMonitoringPage from './pages/TemperatureMonitoringPage';
import TemperatureHistoryPage from './pages/TemperatureHistoryPage';
import BarcodeScannerPage from './pages/BarcodeScannerPage';
import PredictiveTransferPage from './pages/PredictiveTransferPage';
import LineSettingsPage from './pages/LineSettingsPage';
import AuditTrailPage from './pages/AuditTrailPage';
import ReportsAnalyticsPage from './pages/ReportsAnalyticsPage';
import LoginPage from './pages/LoginPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const { hasAccess, currentUser } = useAuth();

  if (!currentUser) {
    return (
      <>
        <LoginPage />
        <ToastContainer />
      </>
    );
  }

  // Page Routing Map
  const renderCurrentPage = () => {
    if (!hasAccess(currentPage)) {
      return <DashboardPage setCurrentPage={setCurrentPage} />;
    }

    switch (currentPage) {
      case 'dashboard':
        return <DashboardPage setCurrentPage={setCurrentPage} />;
      case 'inventory-main':
        return <MainInventoryPage setCurrentPage={setCurrentPage} />;
      case 'inventory-sub':
        return <SubInventoryPage setCurrentPage={setCurrentPage} />;
      case 'receive':
        return <VaccineReceivePage setCurrentPage={setCurrentPage} />;
      case 'requisition-create':
        return <RequisitionCreatePage setCurrentPage={setCurrentPage} />;
      case 'requisition-approve':
        return <RequisitionApprovePage setCurrentPage={setCurrentPage} />;
      case 'dispense':
        return <DispenseAndWastagePage setCurrentPage={setCurrentPage} />;
      case 'temperature':
        return <TemperatureMonitoringPage setCurrentPage={setCurrentPage} />;
      case 'temperature-history':
        return <TemperatureHistoryPage setCurrentPage={setCurrentPage} />;
      case 'scanner':
        return <BarcodeScannerPage setCurrentPage={setCurrentPage} />;
      case 'predictive':
        return <PredictiveTransferPage setCurrentPage={setCurrentPage} />;
      case 'line-settings':
        return <LineSettingsPage setCurrentPage={setCurrentPage} />;
      case 'audit':
        return <AuditTrailPage setCurrentPage={setCurrentPage} />;
      case 'reports':
        return <ReportsAnalyticsPage setCurrentPage={setCurrentPage} />;
      default:
        return <DashboardPage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div id="app-shell">
      <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <main id="main-content-wrapper">
        <Topbar setCurrentPage={setCurrentPage} />
        
        <div id="page-content" className="page-container">
          {renderCurrentPage()}
        </div>
      </main>

      <ToastContainer />
    </div>
  );
}
