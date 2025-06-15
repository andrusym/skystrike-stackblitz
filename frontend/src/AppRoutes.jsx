import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./LoginPage";
import ProtectedRoute from "./ProtectedRoute";
import Layout from "./components/Layout";
import { useAuth } from "./AuthContext";

import Dashboard from "./pages/Dashboard";
import Strategies from "./pages/Strategies";
import TradesPage from "./pages/TradesPage";
import WealthDashboard from "./pages/WealthDashboard";
import SetupPage from "./pages/SetupPage";
import ConfigPage from "./pages/ConfigPage";
import AdminPanel from "./pages/AdminPanel";
import RiskPage from "./pages/RiskPage";
import MLPage from "./pages/MLPage";
import SupportPage from "./pages/SupportPage";
import OrdersPage from "./pages/OrdersPage";  // ? Added

const AppRoutes = () => {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<ProtectedRoute isAuthenticated={!!user}><Layout><Dashboard /></Layout></ProtectedRoute>} />
      <Route path="/strategies" element={<ProtectedRoute isAuthenticated={!!user}><Layout><Strategies /></Layout></ProtectedRoute>} />
      <Route path="/trades" element={<ProtectedRoute isAuthenticated={!!user}><Layout><TradesPage /></Layout></ProtectedRoute>} />
      <Route path="/orders" element={<ProtectedRoute isAuthenticated={!!user}><Layout><OrdersPage /></Layout></ProtectedRoute>} />  {/* ? New Route */}
      <Route path="/wealth" element={<ProtectedRoute isAuthenticated={!!user}><Layout><WealthDashboard /></Layout></ProtectedRoute>} />
      <Route path="/risk" element={<ProtectedRoute isAuthenticated={!!user}><Layout><RiskPage /></Layout></ProtectedRoute>} />
      <Route path="/ml" element={<ProtectedRoute isAuthenticated={!!user}><Layout><MLPage /></Layout></ProtectedRoute>} />
      <Route path="/support" element={<ProtectedRoute isAuthenticated={!!user}><Layout><SupportPage /></Layout></ProtectedRoute>} />
      <Route path="/setup" element={<ProtectedRoute isAuthenticated={!!user}><Layout><SetupPage /></Layout></ProtectedRoute>} />
      <Route path="/config" element={<ProtectedRoute isAuthenticated={!!user}><Layout><ConfigPage /></Layout></ProtectedRoute>} />
      <Route path="/admin" element={<ProtectedRoute isAuthenticated={!!user}><Layout><AdminPanel /></Layout></ProtectedRoute>} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default AppRoutes;
