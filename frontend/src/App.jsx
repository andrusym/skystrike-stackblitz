import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "./LoginPage";
import Dashboard from "./Dashboard";
import Journal from "./Journal";
import ProtectedRoute from "./ProtectedRoute";
import { AuthProvider, useAuth } from "./AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/journal"
            element={
              <ProtectedRoute>
                <Journal />
              </ProtectedRoute>
            }
          />
          {/* Catch-all: Redirect to dashboard if logged in, else to login */}
          <Route
            path="*"
            element={
              <AuthRedirect />
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

// Helper component to handle unknown routes based on auth
const AuthRedirect = () => {
  const { user } = useAuth();
  return <Navigate to={user ? "/dashboard" : "/login"} />;
};

export default App;
