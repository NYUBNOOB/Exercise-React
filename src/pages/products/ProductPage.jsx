import React from "react";
import { Box, Button, Container, Tooltip, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import NavBar from "../../components/navbar/NavBar";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://67b40d1e392f4aa94fa91a60.mockapi.io/api/v1/products"
        );
        setProducts(response.data);
      } catch (e) {
        console.error("Error : ", e);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://67b40d1e392f4aa94fa91a60.mockapi.io/api/v1/products/${id}`
      );
      setProducts(products.filter((product) => product.id !== id));
      Swal.fire({
        title: "Deleted!",
        text: "Your Products has been deleted.",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const columns = [
    { field: "productName", headerName: "Name", width: 200 },
    { field: "price", headerName: "Price", width: 200 },
    { field: "stock", headerName: "Stock", width: 200 },
    { field: "category", headerName: "Category", width: 200 },
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
          width: "100%",        // Full width
          minHeight: "100vh",   // Ensures full height even when content grows        
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
                All Products
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
                Create Product
              </Button>
            </Box>
            <DataGrid rows={products} columns={columns} />
          </Box>
        </Container>
      </Box>
    </>
  );
};
export default ProductPage;
