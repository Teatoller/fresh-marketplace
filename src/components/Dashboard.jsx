// Dashboard.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Dashboard.css'; // Import your CSS file

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Dashboard</h2>
      <div className="dashboard-links">
        <Link to="/products" className="dashboard-link">View Products</Link>
        <Link to="/add-product" className="dashboard-link">Add Product</Link>
      </div>
    </div>
  );
}

export default Dashboard;
