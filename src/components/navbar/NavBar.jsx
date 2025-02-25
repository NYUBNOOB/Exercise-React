import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function NavBar() {

  const navigate = useNavigate();

  return (
    <Box>
      <AppBar
        position="static"
        sx={{ boxShadow: "inherit", backgroundColor: "#fff" }}
      >
        <Toolbar>
          <Container>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box>
                <Box
                  component="img"
                  src="../Logo.svg"
                  alt="Logo"
                  sx={{ height: 20, marginRight: 2 }}
                />
              </Box>
              <Box 
                sx={{
                  display : 'flex',
                  justifyContent : 'space-between',
                  alignItems : 'center',
                  gap : 2
                }}
              >
                <Button
                  sx={{
                    color : "#000",
                    textTransform : 'none',
                    fontSize : 16,
                    backgroundColor : 'inherit'
                  }}
                  onClick={() => navigate("/")}
                >
                  Home
                </Button>
                <Button
                  sx={{
                    color : "#000",
                    textTransform : 'none',
                    fontSize : 16,
                    backgroundColor : 'inherit'
                  }}
                  onClick={() => navigate("products")}
                >
                  Products
                </Button>
                <Button
                  sx={{
                    color : "#000",
                    textTransform : 'none',
                    fontSize : 16,
                    backgroundColor : 'inherit'
                  }}
                  onClick={() => navigate("/users")}
                >
                  User
                </Button>
              </Box>
              <Box>
                <Button
                  sx={{
                    color : '#4CAF4F',
                    mr : 4,
                    textTransform : 'none',
                    fontSize : 16
                  }}
                  onClick={() => navigate('/login')}
                >
                  Login
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor : '#4CAF4F',
                    boxShadow : 'none',
                    px : 2,
                    textTransform : 'none',
                    fontSize : 16
                  }}
                  onClick={() => navigate("/signup")}
                >
                  Sign up
                </Button>
              </Box>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
