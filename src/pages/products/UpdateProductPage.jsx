import { Box, Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useState , useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateProductPage() {

  const { id } = useParams();
  const navigate = useNavigate();
  const [productName, setProductname] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("ProductName: ", productName);
    console.log("Description: ", description);
    console.log("price: ", price);
    console.log("stock: ", stock);
    console.log("category: ", category);
  
    try {
      await axios.put(
        `https://67b40d1e392f4aa94fa91a60.mockapi.io/api/v1/products/${id}`,
        {
          productName: productName,
          description: description,
          price: price,
          stock: stock,
          category: category,
        }
      );

      navigate("/products");
    } catch (e) {
      console.error("Error : ", e);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://67b40d1e392f4aa94fa91a60.mockapi.io/api/v1/products/${id}`
        );
        setProductname(response.data.productName);
        setDescription(response.data.description);
        setPrice(response.data.price);
        setStock(response.data.stock);
        setCategory(response.data.category);
      } 
      catch (e) {
        console.error("Error : ", e);
      }
    };

    fetchData();
  }, []);

  return (
    <Box
      onSubmit={handleSubmit}
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <TextField
        id="outlined-basic"
        label="ProductName"
        variant="outlined"
        value={productName}
        onChange={(e) => setProductname(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Description"
        variant="outlined"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Price"
        variant="outlined"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Stock"
        variant="outlined"
        value={stock}
        onChange={(e) => setStock(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Category"
        variant="outlined"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <Button type="submit" variant="contained">
        Update
      </Button>
    </Box>
  );
}

export default UpdateProductPage;
