import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import "../css/AddProduct.css"; // Import your CSS file

function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "/api/products",
        { name, price, description, category, stock },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Product added:", response.data);
      // Optionally clear the form after successful submission
      setName("");
      setPrice("");
      setDescription("");
      setCategory("");
      setStock("");

      // Redirect to product list upon successful addition
      navigate("/products");
    } catch (error) {
      console.error("Error adding product:", error);
      setError("Failed to add product. Please check your input.");
    }
  };

  return (
    <div className="form-container">
      <h2>Add Product</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          className="form-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Price"
          className="form-input"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          className="form-textarea"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Category"
          className="form-input"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Stock"
          className="form-input"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          required
        />
        <button type="submit" className="form-button">
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
