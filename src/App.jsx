import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Journal from './pages/Journal';
import LoginPage from './pages/LoginPage';
import ProtectedRoute from './ProtectedRoute';
import Layout from './components/Layout';
import { useAuth } from './AuthContext';
import { ThemeProvider } from './ThemeContext';

const AppRouter = () => {
  const { user } = useAuth();

  return (
    <ThemeProvider>
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
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default AppRouter;
