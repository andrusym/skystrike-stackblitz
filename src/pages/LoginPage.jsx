import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import { useTheme } from '../ThemeContext';
import '../App.css';

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  const handleLogin = () => {
    login(); // your login logic from context
    navigate('/dashboard');
  };

  return (
    <div className={`login-page ${theme}`}>
      <div className="theme-toggle">
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
      <div className="login-container">
        <h2>Welcome to SkyStrike</h2>
        <button onClick={handleLogin}>Sign In</button>
      </div>
    </div>
  );
};

export default LoginPage;
