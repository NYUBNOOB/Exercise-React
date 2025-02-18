import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Container, Typography } from "@mui/material";

export default function NavBar() {
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
                  src="Logo.svg" // Change to your logo path
                  alt="Logo"
                  sx={{ height: 20, marginRight: 2 }}
                ></Box>
              </Box>
              <Box 
                sx={{
                  display : 'flex',
                  justifyContent : 'space-between',
                  alignItems : 'center',
                  gap : 4
                }}
              >
                <Typography 
                  sx={{
                    color : 'black',
                    fontSize : 16,
                  }}
                >
                  Home
                </Typography>
                <Typography 
                  sx={{
                    color : 'black',
                    fontSize: 16,
                  }}
                >
                  Service
                </Typography>
                <Typography 
                  sx={{
                    color : 'black',
                    fontSize: 16,
                  }}
                >
                  Features
                </Typography>
                <Typography 
                  sx={{
                    color : 'black',
                    fontSize: 16,
                  }}
                >
                  Product
                </Typography>
                <Typography 
                  sx={{
                    color : 'black',
                    fontSize: 16,
                  }}
                >
                  Testimonial
                </Typography>
                <Typography 
                  sx={{
                    color : 'black',
                    fontSize: 16,
                  }}
                >
                  FAQ
                </Typography>
              </Box>
              <Box>
                <Button
                  sx={{
                    color : '#4CAF4F',
                    mr : 4,
                    textTransform : 'none',
                    fontSize : 16
                  }}
                >
                  Login
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor : '#4CAF4F',
                    boxShadow : 'none',
                    px : 4,
                    py : 1,
                    textTransform : 'none',
                    fontSize : 16
                  }}
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
