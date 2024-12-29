import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Users from './pages/Users';
import Reports from './pages/Reports';
import Login from './components/Login';
import Register from './components/Register';
import ChartDashboard from './components/ChartDashboard';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/chart" element={<ChartDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
