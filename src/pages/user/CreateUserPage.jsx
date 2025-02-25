import { Box, Button, TextField } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'

function CreateUserPage() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [avatar, setAvatar] = useState("");
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("username",username)
    console.log("password", password)
    console.log("email", email)
    console.log("firstname", firstname)
    console.log("lastname", lastname)
    console.log("avatar", avatar) 

    try {
      const response = await axios.post(
        "https://67b40d1e392f4aa94fa91a60.mockapi.io/api/v1/products"
      );
      console.log(response.data);
      setProducts(response.data);
    } catch (e) {
      console.error("Error : ", e);
    }
  }

  return (
    <Box
      onSubmit={handleSubmit}
      component="form"
      sx={{
        display : "flex",
        flexDirection : "column",
        gap : 2
      }}
    > 
      <TextField id="outlined-basic" label="Username" variant="outlined" value={username} onChange={(e) => setUsername(e.target.value)}/>
      <TextField id="outlined-basic" label="Password" variant="outlined" onChange={(e) => setPassword(e.target.value)}/>
      <TextField id="outlined-basic" label="Email" variant="outlined" onChange={(e) => setEmail(e.target.value)}/>
      <TextField id="outlined-basic" label="FirstName" variant="outlined" onChange={(e) => setFirstname(e.target.value)}/>
      <TextField id="outlined-basic" label="LastName" variant="outlined" onChange={(e) => setLastname(e.target.value)}/>
      <TextField id="outlined-basic" label="Avatar" variant="outlined" onChange={(e) => setAvatar(e.target.value)}/>
      <Button type='submit' variant='contained'>submit</Button>
    </Box>
  )
}

export default CreateUserPage