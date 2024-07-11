import React, { useState } from 'react';

function AddProduct() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [stock, setStock] = useState('');

  const handleSubmit = async () => {};

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Product</h2>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
      <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
      <input type="number" placeholder="Stock" value={stock} onChange={(e) => setStock(e.target.value)} />
      <button type="submit">Add Product</button>
    </form>
  );
}

export default AddProduct;