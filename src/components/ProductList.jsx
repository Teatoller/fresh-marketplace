import React, { useState, useEffect } from "react";
import axios from "axios";

function ProductList() {
  //   const [products] = useState([
  //     {
  //       id: "1",
  //       name: "Avocado",
  //       price: 123,
  //       vendor: {
  //         username: "steven",
  //       },
  //     },
  //   ]);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            {product.name} - Ksh {product.price} - {product.vendor.username}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
