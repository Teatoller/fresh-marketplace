// ProductList.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ProductList.css"; // Import your CSS file

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get("/api/products");
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="product-list-container">
      <h2>Product List</h2>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product._id} className="product-item">
            <div className="product-name">{product.name}</div>
            <div className="product-details">
              Price: Ksh <span className="product-price">{product.price}</span> - Vendor:{" "}
              <span className="vendor-username">{product.vendor.username}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
