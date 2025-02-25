import { Box } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const UserPage = () => {

  const [users, setUsers] = useState([]);

  // READ ยิง api เก็บใน state แล้วเอา state มาแสดง

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://67b40d1e392f4aa94fa91a60.mockapi.io/api/v1/users");
        console.log(response.data);
        setUsers(response.data);
      } catch (e) {
        console.error("Error: ", e);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      {users.map((item) => (
        <Box
          sx={{mt : 1}}
        >
          {item.username}
          {item.avatar}
          {item.password}
        </Box>
      ))}
    </div>
  )
}

export default UserPage