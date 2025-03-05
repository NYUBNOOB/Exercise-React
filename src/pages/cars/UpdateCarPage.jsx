import React, { useState, useEffect } from "react";
import { Box, Button, TextField, Container, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

export default function UpdateCarPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [color, setColor] = useState("");
  const [year, setYear] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.put(
        `https://67c00971b9d02a9f22480ba6.mockapi.io/api/cars/${id}`,
        {
          brand: brand,
          model: model,
          color: color,
          year: year,
        }
      );

      navigate("/cars");
      Swal.fire({
        title: "CREATE SUCCESS!",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (e) {
      console.error("Error : ", e);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.put(
          `https://67c00971b9d02a9f22480ba6.mockapi.io/api/cars/${id}`
        );
        setBrand(response.data.brand);
        setModel(response.data.model);
        setColor(response.data.color);
        setYear(response.data.year);
      } catch (e) {
        console.error("Error : ", e);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#F5F7FA",
          position: "absolute", // Ensure it covers the whole page
          top: 0,
          left: 0,
          width: "100%", // Full width
          minHeight: "100vh", // Ensures full height even when content grows
        }}
      >
        <Container
          sx={{
            padding: 4,
            mt: 2,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
            }}
          >
            Edit Products
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#fff",
              padding: 4,
              borderRadius: 4,
              height: 550,
              my: 2,
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
                <Typography>Brand</Typography>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  value={brand}
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
                  onChange={(e) => setBrand(e.target.value)}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                }}
              >
                <Typography>Model</Typography>
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
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                }}
              >
                <Typography>Color</Typography>
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
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                }}
              >
                <Typography>Year</Typography>
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
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
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
                    onClick={() => navigate("/cars")}
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
                      px: 7,
                      my: 4,
                    }}
                  >
                    Edit
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
