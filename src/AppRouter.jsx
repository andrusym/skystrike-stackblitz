import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Journal from './pages/Journal';
import LoginPage from './pages/LoginPage';
import PerformanceSummary from './pages/PerformanceSummary';
import Settings from './pages/Settings';
import ProtectedRoute from './ProtectedRoute';
import { useAuth } from './AuthContext';
import Layout from './components/Layout';

const AppRouter = () => {
  const { user } = useAuth();

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isAuthenticated={!!user}>
              <Layout>
                <Dashboard />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/journal"
          element={
            <ProtectedRoute isAuthenticated={!!user}>
              <Layout>
                <Journal />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/performance"
          element={
            <ProtectedRoute isAuthenticated={!!user}>
              <Layout>
                <PerformanceSummary />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <ProtectedRoute isAuthenticated={!!user}>
              <Layout>
                <Settings />
              </Layout>
            </ProtectedRoute>
          }
        />
        {/* Fallback Route */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
