import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import axios from "axios";
import React, { useEffect, useState } from "react";
import NavBar from "../../components/navbar/NavBar";
import { Box, Button, Container, Tooltip, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function CarPage() {
  const navigate = useNavigate();
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://67c00971b9d02a9f22480ba6.mockapi.io/api/cars"
        );
        setCars(response.data);
      } catch (e) {
        console.error("Error : ", e);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://67c00971b9d02a9f22480ba6.mockapi.io/api/cars/${id}`
      );
      setCars(cars.filter((car) => car.id !== id));
      Swal.fire({
        title: "Deleted!",
        text: "Your Cars has been deleted.",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.error("Error deleting cars:", error);
    }
  };

  const columns = [
    { field: "brand", headerName: "Brand", width: 200 },
    { field: "model", headerName: "Model", width: 200 },
    { field: "color", headerName: "Color", width: 200 },
    { field: "year", headerName: "Year", width: 200 },
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
          width: "100%", // Full width
          minHeight: "100vh", // Ensures full height even when content grows
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
                All Cars
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#4CAF4F",
                  boxShadow: "none",
                  textTransform: "none",
                  fontSize: 16,
                }}
                onClick={() => navigate("create")}
              >
                Add Cars
              </Button>
            </Box>
            <DataGrid rows={cars} columns={columns} />
          </Box>
        </Container>
      </Box>
    </>
  );
}
