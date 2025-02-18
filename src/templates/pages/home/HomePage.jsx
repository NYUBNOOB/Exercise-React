import React from "react";
import Box from "@mui/material/Box";
import { Button, Container, Typography } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import TextField from '@mui/material/TextField';

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
            <Typography
              variant="h3"
              sx={{
                color: "#4D4D4D",
                fontWeight: "bold",
              }}
            >
              Lessons and insights
            </Typography>
            <Typography
              variant="h3"
              sx={{
                color: "#4CAF4F",
                mb: 2,
                fontWeight: "bold",
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
                backgroundColor: "#4CAF4F",
                boxShadow: "none",
                px: 4,
                py: 1,
                textTransform: "none",
                fontSize: 16,
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
              color: "#4D4D4D",
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
                height: 40,
              }}
            />
            <Box
              component="img"
              src="Logo2.svg" // Change to your logo path
              alt="Logo2"
              sx={{
                height: 40,
              }}
            />
            <Box
              component="img"
              src="Logo3.svg" // Change to your logo path
              alt="Logo3"
              sx={{
                height: 40,
              }}
            />
            <Box
              component="img"
              src="Logo4.svg" // Change to your logo path
              alt="Logo4"
              sx={{
                height: 40,
              }}
            />
            <Box
              component="img"
              src="Logo5.svg" // Change to your logo path
              alt="Logo5"
              sx={{
                height: 40,
              }}
            />
            <Box
              component="img"
              src="Logo6.svg" // Change to your logo path
              alt="Logo6"
              sx={{
                height: 40,
              }}
            />
            <Box
              component="img"
              src="Logo1.svg" // Change to your logo path
              alt="Logo1"
              sx={{
                height: 40,
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
            mt: 6,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "#4D4D4D",
            }}
          >
            Manage your entire community
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "#4D4D4D",
            }}
          >
            in a single system
          </Typography>
          <Typography
            sx={{
              color: "#717171",
              mt: 1,
            }}
          >
            Who is Nextcent suitable for?
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              m: 2,
            }}
          >
            <Box
              component="img"
              src="Icon1.svg" // Change to your logo path
              alt="Icon1"
              sx={{
                mb: 1,
              }}
            />
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                color: "#4D4D4D",
              }}
            >
              Membership
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                color: "#4D4D4D",
              }}
            >
              Organisations
            </Typography>
            <Typography
              sx={{
                color: "#717171",
                textAlign: "center",
              }}
            >
              Our membership management software provides full automation of
              membership renewals and payments
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              m: 2,
            }}
          >
            <Box
              component="img"
              src="Icon2.svg" // Change to your logo path
              alt="Icon2"
              sx={{
                mb: 1,
              }}
            />
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                color: "#4D4D4D",
              }}
            >
              National
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                color: "#4D4D4D",
              }}
            >
              Associations
            </Typography>
            <Typography
              sx={{
                color: "#717171",
                textAlign: "center",
              }}
            >
              Our membership management software provides full automation of
              membership renewals and payments
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              m: 1,
            }}
          >
            <Box
              component="img"
              src="Icon3.svg" // Change to your logo path
              alt="Icon3"
              sx={{
                mb: 2,
              }}
            />
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                color: "#4D4D4D",
              }}
            >
              Clubs And
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                color: "#4D4D4D",
              }}
            >
              Groups
            </Typography>
            <Typography
              sx={{
                color: "#717171",
                textAlign: "center",
              }}
            >
              Our membership management software provides full automation of
              membership renewals and payments
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 9,
          }}
        >
          <Box
            component="img"
            src="Frame35.svg" // Change to your logo path
            alt="Frame35"
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              ml: 8,
            }}
          >
            <Box>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  mb: 2,
                  color: "#4D4D4D",
                }}
              >
                The unseen of spending three years at Pixelgrade
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  color: "#717171",
                  mb: 4,
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
                Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
                tristique iaculis. Nullam pulvinar sit amet risus pretium
                auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus
                sem. Donec elementum pulvinar odio.
              </Typography>
            </Box>
            <Box>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#4CAF4F",
                  boxShadow: "none",
                  px: 4,
                  py: 2,
                  textTransform: "none",
                  fontSize: 16,
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
          backgroundColor: "#F5F7FA",
        }}
      >
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 8,
          }}
        >
          <Box>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                color: "#4D4D4D",
              }}
            >
              Helping a local
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                color: "#4CAF4F",
              }}
            >
              business reinvent itself
            </Typography>
            <Typography
              sx={{
                color: "#18191F",
              }}
            >
              We reached here with our hard work and dedication
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between ",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Box
                  component="img"
                  src="Icon4.svg" // Change to your logo path
                  alt="Icon4"
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      ml: 2,
                      fontWeight: "bold",
                      color: "#4D4D4D",
                    }}
                  >
                    2,245,341
                  </Typography>
                  <Typography
                    sx={{
                      ml: 2,
                      color: "#717171",
                    }}
                  >
                    Members
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  mr: 6,
                }}
              >
                <Box
                  component="img"
                  src="Iconhands.svg" // Change to your logo path
                  alt="Iconhands"
                  sx={{
                    height: 45,
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      ml: 2,
                      fontWeight: "bold",
                      color: "#4D4D4D",
                    }}
                  >
                    46,328
                  </Typography>
                  <Typography
                    sx={{
                      ml: 2,
                      color: "#717171",
                    }}
                  >
                    Clubs
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between ",
                gap: 16,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  mt: 4,
                }}
              >
                <Box
                  component="img"
                  src="Icon7.svg" // Change to your logo path
                  alt="Icon7"
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      ml: 2,
                      fontWeight: "bold",
                      color: "#4D4D4D",
                    }}
                  >
                    828,867
                  </Typography>
                  <Typography
                    sx={{
                      ml: 2,
                      color: "#717171",
                    }}
                  >
                    Event Bookings
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  mt: 4,
                }}
              >
                <Box
                  component="img"
                  src="Icon8.svg" // Change to your logo path
                  alt="Icon8"
                  sx={{
                    height: 45,
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      ml: 2,
                      fontWeight: "bold",
                      color: "#4D4D4D",
                    }}
                  >
                    1,926,436
                  </Typography>
                  <Typography
                    sx={{
                      ml: 2,
                      color: "#717171",
                    }}
                  >
                    Payments
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 8,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                component="img"
                src="Pana.svg" // Change to your logo path
                alt="Pana"
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                ml: 8,
              }}
            >
              <Box>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "bold",
                    color: "#4D4D4D",
                    mb: 2,
                  }}
                >
                  How to design your site footer like we did
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    color: "#717171",
                  }}
                >
                  Donec a eros justo. Fusce egestas tristique ultrices. Nam
                  tempor, augue nec tincidunt molestie, massa nunc varius arcu,
                  at scelerisque elit erat a magna. Donec quis erat at libero
                  ultrices mollis. In hac habitasse platea dictumst. Vivamus
                  vehicula leo dui, at porta nisi facilisis finibus. In euismod
                  augue vitae nisi ultricies, non aliquet urna tincidunt.
                  Integer in nisi eget nulla commodo faucibus efficitur quis
                  massa. Praesent felis est, finibus et nisi ac, hendrerit
                  venenatis libero. Donec consectetur faucibus ipsum id gravida.
                </Typography>
              </Box>
              <Box>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#4CAF4F",
                    boxShadow: "none",
                    px: 4,
                    py: 2,
                    textTransform: "none",
                    fontSize: 16,
                    mt: 4,
                  }}
                >
                  Learn More
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
      <Box
        sx={{
          backgroundColor: "#F5F7FA",
        }}
      >
        <Container>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mt: 2,
              }}
            >
              <Box
                component="img"
                src="Tesla.svg" // Change to your logo path
                alt="Tesla"
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                ml: 8,
              }}
            >
              <Box>
                <Typography
                  sx={{
                    color: "#717171",
                  }}
                >
                  Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
                  lobortis sem dui, vel rutrum risus tincidunt ullamcorper.
                  Proin eu enim metus. Vivamus sed libero ornare, tristique quam
                  in, gravida enim. Nullam ut molestie arcu, at hendrerit elit.
                  Morbi laoreet elit at ligula molestie, nec molestie mi
                  blandit. Suspendisse cursus tellus sed augue ultrices, quis
                  tristique nulla sodales. Suspendisse eget lorem eu turpis
                  vestibulum pretium. Suspendisse potenti. Quisque malesuada
                  enim sapien, vitae placerat ante feugiat eget. Quisque
                  vulputate odio neque, eget efficitur libero condimentum id.
                  Curabitur id nibh id sem dignissim finibus ac sit amet magna.
                </Typography>
              </Box>
              <Box
                sx={{
                  mt: 2,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: "#4CAF4F",
                    fontWeight: "bold",
                  }}
                >
                  Tim Smith
                </Typography>
              </Box>
              <Box
                sx={{
                  mt: 1,
                }}
              >
                <Typography
                  sx={{
                    color: "#89939E",
                  }}
                >
                  British Dragon Boat Racing Association
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mt: 3,
                }}
              >
                <Box
                  component="img"
                  src="Logo1.svg" // Change to your logo path
                  alt="Logo1"
                />
                <Box
                  component="img"
                  src="Logo2.svg" // Change to your logo path
                  alt="Logo2"
                />
                <Box
                  component="img"
                  src="Logo3.svg" // Change to your logo path
                  alt="Logo3"
                />
                <Box
                  component="img"
                  src="Logo4.svg" // Change to your logo path
                  alt="Logo4"
                />
                <Box
                  component="img"
                  src="Logo5.svg" // Change to your logo path
                  alt="Logo5"
                />
                <Box
                  component="img"
                  src="Logo6.svg" // Change to your logo path
                  alt="Logo6"
                />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#4CAF4F",
                      fontWeight: "bold",
                      mr: 1,
                    }}
                  >
                    Meet all customers
                  </Typography>
                  <EastIcon
                    sx={{
                      color: "#4CAF4F",
                      fontSize: 20,
                      mt: 1,
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box
        sx={{
          mb: 16,
        }}
      >
        <Container>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: 3,
              }}
            >
              <Box
                sx={{
                  mb: 1,
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    color: "#4D4D4D",
                    fontWeight: "bold",
                  }}
                >
                  Caring is the new marketing
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    color: "#717171",
                    textAlign: "center",
                    mx: 24,
                  }}
                >
                  The Nexcent blog is the best place to read about the latest
                  membership insights, trends and more. See who's joining the
                  community, read about how our community are increasing their
                  membership income and lot's more.​
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                position: "relative",
                flexDirection: "row",
              }}
            >
              <Box
                component="img"
                src="Sleep.svg" // Change to your logo path
                alt="Sleep"
              />
              <Box
                sx={{
                  backgroundColor: "white",
                  position: "absolute",
                  top: "190px",
                  left: "34px",
                  width: "300px",
                  height: "170px",
                  borderRadius: 2,
                  boxShadow: 1,
                }}
              >
                <Typography
                  sx={{
                    textAlign: "center",
                    color: "#717171",
                    m: 2,
                    fontWeight: "bold",
                    fontSize: 20,
                  }}
                >
                  Creating Streamlined Safeguarding Processes with OneRen
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    my: 3,
                  }}
                >
                  <Typography
                    sx={{
                      textAlign: "center",
                      color: "#4CAF4F",
                      fontWeight: "bold",
                    }}
                  >
                    Readmore
                  </Typography>
                  <EastIcon
                    sx={{
                      color: "#4CAF4F",
                      fontSize: 20,
                      mx: 1,
                    }}
                  />
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                position: "relative",
                flexDirection: "row",
              }}
            >
              <Box
                component="img"
                src="Working1.svg" // Change to your logo path
                alt="Working1"
              />
              <Box
                sx={{
                  backgroundColor: "white",
                  position: "absolute",
                  top: "190px",
                  left: "34px",
                  width: "300px",
                  height: "170px",
                  borderRadius: 2,
                  boxShadow: 1,
                }}
              >
                <Typography
                  sx={{
                    textAlign: "center",
                    color: "#717171",
                    padding: 1,
                    fontWeight: "bold",
                    fontSize: 20,
                  }}
                >
                  What are your safeguarding responsibilities and how can you
                  manage them?
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    my: 3,
                  }}
                >
                  <Typography
                    sx={{
                      textAlign: "center",
                      color: "#4CAF4F",
                      fontWeight: "bold",
                    }}
                  >
                    Readmore
                  </Typography>
                  <EastIcon
                    sx={{
                      color: "#4CAF4F",
                      fontSize: 20,
                      mx: 1,
                    }}
                  />
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                position: "relative",
                flexDirection: "row",
              }}
            >
              <Box
                component="img"
                src="Working2.svg" // Change to your logo path
                alt="Working2"
              />
              <Box
                sx={{
                  backgroundColor: "white",
                  position: "absolute",
                  top: "190px",
                  left: "34px",
                  width: "300px",
                  height: "170px",
                  borderRadius: 2,
                  boxShadow: 1,
                }}
              >
                <Typography
                  sx={{
                    textAlign: "center",
                    color: "#717171",
                    padding: 2,
                    fontWeight: "bold",
                    fontSize: 20,
                  }}
                >
                  Revamping the Membership Model with Triathlon Australia
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    my: 1,
                  }}
                >
                  <Typography
                    sx={{
                      textAlign: "center",
                      color: "#4CAF4F",
                      fontWeight: "bold",
                    }}
                  >
                    Readmore
                  </Typography>
                  <EastIcon
                    sx={{
                      color: "#4CAF4F",
                      fontSize: 20,
                      mx: 1,
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box
        sx={{
          backgroundColor: "#F5F7FA",
        }}
      >
        <Container>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                mt: 4,
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontWeight: "bold",
                  color: "#263238",
                }}
              >
                Pellentesque suscipit
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: "bold",
                  color: "#263238",
                }}
              >
                fringilla libero eu.
              </Typography>
            </Box>
            <Box>
              <Box
                sx={{
                  mb: 4,
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#4CAF4F",
                    boxShadow: "none",
                    px: 4,
                    py: 1,
                    textTransform: "none",
                    fontSize: 16,
                    mt: 4,
                  }}
                >
                  Get a Demo
                  <EastIcon
                    sx={{
                      fontSize: 16,
                      ml: 1,
                    }}
                  />
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box
        sx={{
          backgroundColor: "#263238",
        }}
      >
        <Container>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: 8,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Box
                  component="img"
                  src="Icon.svg" // Change to your logo path
                  alt="Icon"
                />
                <Typography
                  variant="h4"
                  sx={{
                    color: "#fff",
                    ml: 1,
                  }}
                >
                  Nexcent
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  my: 6,
                  mx: 1,
                }}
              >
                <Typography
                  sx={{
                    color: "#F5F7FA",
                    mb: 1,
                  }}
                >
                  Copyright © 2020 Nexcent ltd.
                </Typography>
                <Typography
                  sx={{
                    color: "#F5F7FA",
                  }}
                >
                  All rights reserved
                </Typography>
              </Box>
              <Box>
                <Box
                  component="img"
                  src="SocialLinks.svg" // Change to your logo path
                  alt="SocialLinks"
                />
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: 20,
                }}
              >
                Company
              </Typography>
              <Typography
                sx={{
                  color: "#F5F7FA",
                  mt: 4,
                }}
              >
                About us
              </Typography>
              <Typography
                sx={{
                  color: "#F5F7FA",
                  mt: 2,
                }}
              >
                Blog
              </Typography>
              <Typography
                sx={{
                  color: "#F5F7FA",
                  mt: 2,
                }}
              >
                Contact us
              </Typography>
              <Typography
                sx={{
                  color: "#F5F7FA",
                  mt: 2,
                }}
              >
                Pricing
              </Typography>
              <Typography
                sx={{
                  color: "#F5F7FA",
                  mt: 2,
                }}
              >
                Testimonials
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: 20,
                }}
              >
                Support
              </Typography>
              <Typography
                sx={{
                  color: "#F5F7FA",
                  mt: 4,
                }}
              >
                Help center
              </Typography>
              <Typography
                sx={{
                  color: "#F5F7FA",
                  mt: 2,
                }}
              >
                Terms of service
              </Typography>
              <Typography
                sx={{
                  color: "#F5F7FA",
                  mt: 2,
                }}
              >
                Legal
              </Typography>
              <Typography
                sx={{
                  color: "#F5F7FA",
                  mt: 2,
                }}
              >
                Privacy policy
              </Typography>
              <Typography
                sx={{
                  color: "#F5F7FA",
                  mt: 2,
                }}
              >
                Status
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: 20,
                }}
              >
                Stay up to date
              </Typography>
              <Box
                sx={{
                  backgroundColor : '#717171',
                  mt : 4,
                  borderRadius : 2
                }}
              >
                <Typography
                  sx={{
                    padding : 2,
                    color : '#fff'
                  }}
                >
                  Your email address
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default HomePage;
