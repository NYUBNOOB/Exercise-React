import { Box, Button, Container, Tooltip, Typography, } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import NavBar from "../../components/navbar/NavBar";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { useNavigate, useParams } from "react-router-dom";

const UserPage = () => {

  const navigate = useNavigate();
  const { id } = useParams;
  const [users, setUsers] = useState([]);

  // READ ยิง api เก็บใน state แล้วเอา state มาแสดง

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://67b40d1e392f4aa94fa91a60.mockapi.io/api/v1/users"
        );
        console.log(response.data);
        setUsers(response.data);
      } catch (e) {
        console.error("Error: ", e);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://67b40d1e392f4aa94fa91a60.mockapi.io/api/v1/users/${id}`
      );
      setUsers(users.filter((user) => user.id !== id));
      console.log(`Users ${id} deleted successfully`);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const columns = [
    { field: "username", headerName: "UserName", width: 200 },
    { field: "firstName", headerName: "FirstName", width: 200 },
    { field: "lastName", headerName: "LastName", width: 200 },
    { field: "email", headerName: "Email", width: 240 },
    {
      field: "action",
      headerName: "Action",
      type: "actions",
      width: 200,
      renderCell: (params) => {
        return [
          <Tooltip key={1} title="แก้ไขข้อมูล">
            <GridActionsCellItem
              icon={<EditIcon color="primary" />}
              label="Update"
              onClick={() => navigate("update/" + params?.row?.id)}
            />
          </Tooltip>,
          <Tooltip key={2} title="ลบข้อมูล">
            <GridActionsCellItem
              icon={<DeleteIcon color="error" />}
              label="Delete"
              onClick={() => handleDelete(params?.row?.id)}
            />
          </Tooltip>,
        ];
      },
    },
  ];

  return (
    <>
      <NavBar />
      <Box
        sx={{
          backgroundColor: "#F5F7FA",
        }}
      >
        <Container
          sx={{
            padding: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#fff",
              padding: 4,
              borderRadius: 4,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mb: 2,
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                }}
              >
                All Users
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#4CAF4F",
                  boxShadow: "none",
                  textTransform: "none",
                  fontSize : 16
                }}
                onClick={() => navigate("create")}
              >
                Add User
              </Button>
            </Box>
            <DataGrid rows={users} columns={columns} />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default UserPage;
