import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard.jsx";
import AdminPanel from "./pages/AdminPanel.jsx";
import ConfigPage from "./pages/ConfigPage.jsx";
import MLPage from "./pages/MLPage.jsx";
import OrdersPage from "./pages/OrdersPage.jsx";
import PerformanceSummary from "./pages/PerformanceSummary.jsx";
import RiskPage from "./pages/RiskPage.jsx";
import SetupPage from "./pages/SetupPage.jsx";
import Strategies from "./pages/Strategies.jsx";
import WealthDashboard from "./pages/WealthDashboard.jsx";
import SupportPage from "./pages/SupportPage.jsx";
import TradeJournalEditor from "./pages/TradeJournalEditor.jsx";
import TradesPage from "./pages/TradesPage.jsx";

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/adminpanel" element={<AdminPanel />} />
        <Route path="/configpage" element={<ConfigPage />} />
        <Route path="/mlpage" element={<MLPage />} />
        <Route path="/orderspage" element={<OrdersPage />} />
        <Route path="/performancesummary" element={<PerformanceSummary />} />
        <Route path="/riskpage" element={<RiskPage />} />
        <Route path="/setuppage" element={<SetupPage />} />
        <Route path="/strategies" element={<Strategies />} />
        <Route path="/wealthdashboard" element={<WealthDashboard />} />
        <Route path="/supportpage" element={<SupportPage />} />
        <Route path="/tradejournaleditor" element={<TradeJournalEditor />} />
        <Route path="/tradespage" element={<TradesPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
