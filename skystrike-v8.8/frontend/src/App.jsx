import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './AppRouter';
import { AuthProvider } from './AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import './App.css';

const App = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <AppRouter />
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
