import React, { useState } from 'react';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('buyer');

  const handleSubmit = async () => {};

  return (
    <form onSubmit={handleSubmit}>
      <h2 style={{border: "1px solid red"}}>Register</h2>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="buyer">Buyer</option>
        <option value="vendor">Vendor</option>
      </select>
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
