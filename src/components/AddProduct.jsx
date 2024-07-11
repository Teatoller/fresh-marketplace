import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../css/AddProduct.css"; // Import your CSS file for styling

function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    // Check if token is available
    if (!token) {
      console.error("No token found in localStorage");
      return;
    }

    // Set headers with Authorization
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    try {
      // Make Axios post request with headers
      await axios.post(
        "/api/products",
        { name, price, description, category, stock },
        { headers }
      );
      navigate("/products");
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div className="add-product-container">
      <form className="add-product-form" onSubmit={handleSubmit}>
        <h2>Add Product</h2>
        <input
          type="text"
          className="input-field"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          className="input-field"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          className="input-field"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          className="input-field"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          type="number"
          className="input-field"
          placeholder="Stock"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
        />
        <button type="submit" className="submit-button">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;
