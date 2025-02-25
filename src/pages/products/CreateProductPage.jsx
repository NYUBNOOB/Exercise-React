import { Box, Button, Container, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/navbar/NavBar";

function CreateProductPage() {
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
      await axios.post(
        "https://67b40d1e392f4aa94fa91a60.mockapi.io/api/v1/products",
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

  return (
    <>
      <NavBar />
      <Box
        sx={{
          backgroundColor: "#F5F7FA",
          width: "100vw",
          height: "100vh",
        }}
      >
        <Container
          sx={{
            padding: 4,
          }}
        >
          <Typography
              variant="h5"
              sx={{
                fontWeight : "bold"
              }}
            >
              Add Products
            </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#fff",
              padding: 4,
              borderRadius: 4,
              height : 550,
              my : 2
            }}
          >
            <Box
              onSubmit={handleSubmit}
              component="form"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                }}
              >
                <Typography>ProductName</Typography>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      // Border color on hover
                      "&:hover fieldset": {
                        borderColor: "#4CAF4F",
                      },
                      // Border color on focus
                      "&.Mui-focused fieldset": {
                        borderColor: "#4CAF4F",
                      },
                    },
                  }}
                  onChange={(e) => setProductname(e.target.value)}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                }}
              >
                <Typography>Description</Typography>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      // Border color on hover
                      "&:hover fieldset": {
                        borderColor: "#4CAF4F",
                      },
                      // Border color on focus
                      "&.Mui-focused fieldset": {
                        borderColor: "#4CAF4F",
                      },
                    },
                  }}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                }}
              >
                <Typography>Price</Typography>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      // Border color on hover
                      "&:hover fieldset": {
                        borderColor: "#4CAF4F",
                      },
                      // Border color on focus
                      "&.Mui-focused fieldset": {
                        borderColor: "#4CAF4F",
                      },
                    },
                  }}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                }}
              >
                <Typography>Stock</Typography>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      // Border color on hover
                      "&:hover fieldset": {
                        borderColor: "#4CAF4F",
                      },
                      // Border color on focus
                      "&.Mui-focused fieldset": {
                        borderColor: "#4CAF4F",
                      },
                    },
                  }}
                  onChange={(e) => setStock(e.target.value)}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                }}
              >
                <Typography>Category</Typography>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      // Border color on hover
                      "&:hover fieldset": {
                        borderColor: "#4CAF4F",
                      },
                      // Border color on focus
                      "&.Mui-focused fieldset": {
                        borderColor: "#4CAF4F",
                      },
                    },
                  }}
                  onChange={(e) => setCategory(e.target.value)}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Box
                  sx={{
                    mx: 4,
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#B42000",
                      boxShadow: "none",
                      textTransform: "none",
                      fontSize: 16,
                      px: 5,
                      my: 4,
                    }}
                    onClick={() => navigate("/products")}
                  >
                    Cancle
                  </Button>
                </Box>
                <Box>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      backgroundColor: "#4CAF4F",
                      boxShadow: "none",
                      textTransform: "none",
                      fontSize: 16,
                      px: 5,
                      my: 4,
                    }}
                  >
                    Create
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default CreateProductPage;
