import React from "react";
import Box from "@mui/material/Box";
import { Button, Container, Typography } from "@mui/material";

function HomePage() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#F5F7FA",
        }}
      >
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h2">Lessons and insights</Typography>
            <Typography
              variant="h2"
              sx={{
                color: "#4CAF4F",
                mb: 2,
              }}
            >
              from 8 years
            </Typography>
            <Typography
              sx={{
                color: "#717171",
                mb: 4,
              }}
            >
              Where to grow your business as a photographer: site or social
              media?
            </Typography>
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
              Register
            </Button>
          </Box>
          <Box
            component="img"
            src="Illustration.svg" // Change to your logo path
            alt=""
            sx={{
              justifyContent: "space-between",
              p: 5,
              m: 6,
            }}
          />
        </Container>
      </Box>
      <Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              mt: 5,
            }}
          >
            Our Clients
          </Typography>
          <Typography
            sx={{
              color: "#717171",
              mt: 1,
            }}
          >
            We have been working with some Fortune 500+ clients
          </Typography>
        </Box>
        <Box
          sx={{
            mt: 4,
          }}
        >
          <Container
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              src="Logo1.svg" // Change to your logo path
              alt="Logo1"
              sx={{
                height : 40
              }}
            />
            <Box
              component="img"
              src="Logo2.svg" // Change to your logo path
              alt="Logo2"
              sx={{
                height : 40
              }}
            />
            <Box
              component="img"
              src="Logo3.svg" // Change to your logo path
              alt="Logo3"
              sx={{
                height : 40
              }}
            />
            <Box
              component="img"
              src="Logo4.svg" // Change to your logo path
              alt="Logo4"
              sx={{
                height : 40
              }}
            />
            <Box
              component="img"
              src="Logo5.svg" // Change to your logo path
              alt="Logo5"
              sx={{
                height : 40
              }}
            />
            <Box
              component="img"
              src="Logo6.svg" // Change to your logo path
              alt="Logo6"
              sx={{
                height : 40
              }}
            />
            <Box
              component="img"
              src="Logo1.svg" // Change to your logo path
              alt="Logo1"
              sx={{
                height : 40
              }}
            />
          </Container>
        </Box>
      </Box>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt : 6,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
            }}
          >
            Manage your entire community
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
            }}
          >
            in a single system
          </Typography>
          <Typography
            sx={{
              color : '#717171',
              mt : 1
            }}
          >
            Who is Nextcent suitable for?
          </Typography>
        </Box>
        <Box
          sx={{
            display : 'flex',
            justifyContent : 'center',
            mt : 4
          }}
        >
          <Box
            sx={{
              display : 'flex',
              flexDirection : 'column',
              alignItems : 'center',
              m : 2
            }}
          >
            <Box 
              component="img"
              src="Icon1.svg" // Change to your logo path
              alt="Icon1"
              sx={{ 
                mb : 1 
              }}
            />
            <Typography
              variant="h4"
              sx={{
                fontWeight : 'bold'
              }}
            >
              Membership
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontWeight : 'bold'
              }}
            >
              Organisations
            </Typography>
            <Typography
              sx={{
                color : '#717171',
                textAlign : 'center'
              }}
            >
              Our membership management software provides full automation of membership renewals and payments
            </Typography>

          </Box>
          <Box
            sx={{
              display : 'flex',
              flexDirection : 'column',
              alignItems : 'center',
              m : 2
            }}
          >
            <Box 
              component="img"
              src="Icon2.svg" // Change to your logo path
              alt="Icon2"
              sx={{ 
                mb : 1 
              }}
            />
            <Typography
              variant="h4"
              sx={{
                fontWeight : 'bold'
              }}
            >
              National
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontWeight : 'bold'
              }}
            >
              Associations
            </Typography>
            <Typography
              sx={{
                color : '#717171',
                textAlign : 'center'
              }}
            >
              Our membership management software provides full automation of membership renewals and payments
            </Typography>
          </Box>
          <Box
            sx={{
              display : 'flex',
              flexDirection : 'column',
              alignItems : 'center',
              m : 1
            }}
          >
            <Box 
              component="img"
              src="Icon3.svg" // Change to your logo path
              alt="Icon3"
              sx={{ 
                mb : 2,
              }}
            />
            <Typography
              variant="h4"
              sx={{
                fontWeight : 'bold'
              }}
            >
              Clubs And
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontWeight : 'bold'
              }}
            >
              Groups
            </Typography>
            <Typography
              sx={{
                color : '#717171',
                textAlign : 'center'
              }}
            >
              Our membership management software provides full automation of membership renewals and payments
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display :'flex',
            justifyContent : 'space-between',
            alignItems : 'center',
            mt : 9
          }}
        >
          <Box 
            component="img"
            src="Frame35.svg" // Change to your logo path
            alt="Frame35"
          />
          <Box
            sx={{
              display : 'flex',
              flexDirection : 'column',
              ml : 8
            }}
          >
            <Box>
              <Typography
                variant= 'h4'
                sx={{
                  fontWeight : 'bold',
                  mb : 2
                }}
              >
                The unseen of spending three years at Pixelgrade
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  color : '#717171',
                  mb : 4
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. 
                Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. 
                Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. 
                Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
              </Typography>
            </Box>
            <Box>
              <Button 
                variant='contained'
                sx={{
                  backgroundColor : '#4CAF4F',
                  boxShadow : 'none',
                  px : 4,
                  py : 2,
                  textTransform : 'none',
                  fontSize : 16
                }}
              >
                Learn More
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
      <Box
        sx={{
          backgroundColor : '#F5F7FA'
        }}
      >
        <Container
          sx={{
            display : 'flex',
            justifyContent : 'space-between',
            alignItems : 'center',
          }}
        >
          <Box>
            <Typography
              variant = 'h4'
              sx={{
                fontWeight : 'bold'
              }}
            >
              Helping a local
            </Typography>
            <Typography
              variant = 'h4'
              sx={{
                fontWeight : 'bold',
                color : '#4CAF4F'
              }}
            >
              business reinvent itself
            </Typography>
            <Typography>
              We reached here with our hard work and dedication
            </Typography>
          </Box>
          <Box
            sx={{
              display : 'flex',
              justifyContent : 'space-between',
              alignItems : 'center'
            }}
          >
            <Box
              sx={{
                display : 'flex',
                flexDirection : 'row',
                alignItems : 'center'
              }}
            >
              <Box 
                component="img"
                src="Icon4.svg" // Change to your logo path
                alt="Icon4"
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default HomePage;
