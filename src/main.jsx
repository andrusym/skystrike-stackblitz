import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './AppRouter';
import { AuthProvider } from './AuthContext';
import { ThemeProvider } from './ThemeContext';
import './App.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
