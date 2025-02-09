import React from 'react'
import Box from '@mui/material/Box';
import { Button, Container, Typography } from '@mui/material';

function HomePage() {
    return (
      <Box 
        sx={{
          backgroundColor : '#F5F7FA'
        }} 
      >
        <Container
          sx={{
            display : 'flex',
            justifyContent : 'space-between',
            alignItems : 'center'
          }}
        >
          <Box 
            sx={{ 
              justifyContent :  'space-between',
            }}
          >
            <Typography variant= 'h2'>
              Lessons and insights 
            </Typography>
            <Typography
              variant= 'h2'
              sx={{
                color : '#4CAF4F',
                mb : 2
              }}
            >
              from 8 years 
            </Typography>
            <Typography
              sx={{
                color : '#717171',
                mb : 4
              }}
            >
              Where to grow your business as a photographer: site or social media? 
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor : '#4CAF4F'
              }}
            >
              Register
            </Button>
          </Box>
          <Box 
            component="img"
            src="Illustration.svg" // Change to your logo path
            alt=""
            sx={{ 
              justifyContent :  'space-between',
              p : 5,
              m : 6
            }}
          >
          </Box>
        </Container>
      </Box>
    )
}

export default HomePage