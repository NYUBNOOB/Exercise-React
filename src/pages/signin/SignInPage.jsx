import React from "react";
import { Box , Container, Typography } from "@mui/material"

function SignInPage() {
  return (
    <Box
      sx={{
        backgroundColor : "#F5F7FA",
        position : "absolute",  
        top : 0,
        left: 0,
        width: "100%",
        height: "100vh",
      }}
    >
      <Container
        sx={{
          padding: 4,
          mt : 2
        }}
      > 
        <Box
          sx={{
            display : "flex",
            justifyContent : "center",
            alignItems : "center",
            padding : 2,
            my : 5,
            backgroundColor : "#fff",
            borderRadius: 4,
            height: 600
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
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
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: 20,
              borderLeft: 1 
            }}
          >
            Hello
          </Box>
        </Box>
      </Container>
    </Box>
  )
  
}

export default SignInPage;
