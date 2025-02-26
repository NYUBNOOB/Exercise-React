import React, { useState, useEffect } from "react";
import { Box, Button, TextField, Container, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function UpdateUserPage() {

  const { id } = useParams();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [avatar, setAvatar] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Username: ", username);
    console.log("Password: ", password);
    console.log("Email: ", email);
    console.log("Firstname: ", firstname);
    console.log("Lastname: ", lastname);
    console.log("Avatar: ", avatar);

    try {
      await axios.put(
        `https://67b40d1e392f4aa94fa91a60.mockapi.io/api/v1/users/${id}`,
        {
          username: username,
          password: password,
          email: email,
          firstName: firstname,
          lastName: lastname,
          avatar: avatar
        }
      );
      navigate("/users");
    } catch (e) {
      console.error("Error : ", e);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://67b40d1e392f4aa94fa91a60.mockapi.io/api/v1/users/${id}`
        );
        setUsername(response.data.username);
        setPassword(response.data.password);
        setEmail(response.data.email);
        setFirstname(response.data.firstName);
        setLastname(response.data.lastName);
        setAvatar(response.data.avatar);
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
            padding: 2,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
            }}
          >
            Edit Users
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#fff",
              padding: 4,
              borderRadius: 4,
              height: 680,
              my: 2,
            }}
          >
            <Box
              onSubmit={handleSubmit}
              component="form"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                }}
              >
                <Typography>Username</Typography>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  value={username}
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
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                }}
              >
                <Typography>Password</Typography>
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                }}
              >
                <Typography>Email</Typography>
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                }}
              >
                <Typography>Firstname</Typography>
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
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                }}
              >
                <Typography>Lastname</Typography>
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
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                }}
              >
                <Typography>Avatar</Typography>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  value={avatar}
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
                  onChange={(e) => setAvatar(e.target.value)}
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
                      my: 2,
                    }}
                    onClick={() => navigate("/users")}
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
                      px: 6,
                      my: 2,
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

export default UpdateUserPage;
