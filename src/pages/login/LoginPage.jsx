import React from "react";
import { Box , Container, Typography } from "@mui/material"

function LoginPage() {
  return (
    <Box
      sx={{
        backgroundColor : "#F5F7FA",
        position : "fixed",  
        top : 0,
        left: 0,
        width: "100vw",
        height: "100vh",
      }}
    >
      <Container>
        <Box
          sx={{
            display : "flex",
            justifyContent : "center",
            alignItems : "center",
            padding : 30,
            backgroundColor : "#fff",
          }}
        >
          <Box
            sx={{
              display : "flex",
              justifyContent : "center",
              alignItems : "center"
            }}
          >
            <Box
              component="img"
              src="Frame35.svg" // Change to your logo path
              alt="Frame35"
            />
          </Box>
          <Box
            sx={{
              display : "flex",
              justifyContent : "center",
              alignItems : "center",
              padding : 20,
            }}
          >
            Hello
          </Box>
        </Box>
      </Container>
    </Box>
  )
  
}

export default LoginPage;
