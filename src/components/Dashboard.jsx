import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <Link to="/products">View Products</Link>
      <Link to="/add-product">Add Product</Link>
    </div>
  );
}

export default Dashboard;
