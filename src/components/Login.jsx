// Login.js

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../css/Login.css"; // Import your CSS file

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/users/login", { username, password });
      const token = response.data.token; // Assuming your server responds with a token
      localStorage.setItem('token', token); // Store the token in localStorage
      navigate("/");
    } catch (error) {
      console.error('Login error:', error);
      setError("Login failed. Please check your credentials."); // Display error message to user
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}
        <input
          className="input-field"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="input-field"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="submit-button" type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
