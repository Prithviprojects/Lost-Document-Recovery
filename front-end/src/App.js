import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ReportDocument from './pages/ReportDocument';
import SearchDocument from './pages/SearchDocument';
import Login from './pages/Login';
import Register from './pages/Register';
import './index.css'; // Tailwind and custom global styles

function App() {
  return (
    <Router>
      <div>
        {/* Navbar Component */}
        <Navbar />
        
        {/* Main Routes */}
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/report" element={<ReportDocument />} />
            <Route path="/search" element={<SearchDocument />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>

        {/* Footer Component */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
