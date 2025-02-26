import React from 'react'
import { Outlet, useRoutes } from 'react-router-dom';
import HomePage from '../pages/home/HomePage';
import UserPage from '../pages/user/UserPage';
import ProductPage from '../pages/products/ProductPage';
import LoginPage from '../pages/login/LoginPage';
import SignUpPage from '../pages/signup/SignUpPage';
import CreateProductPage from '../pages/products/CreateProductPage';
import CreateUserPage from '../pages/user/CreateUserPage';
import UpdateProductPage from '../pages/products/UpdateProductPage';
import UpdateUserPage from '../pages/user/UpdateUserPage';

const Routes = () => {

  const element = useRoutes([
    { path: '', element: <HomePage />},
    { 
      path : 'users', 
      element: <Outlet />,
      children: [
        { path: "", element: <UserPage/>},
        { path: "create", element: <CreateUserPage />},
        { path: "update/:id", element: <UpdateUserPage />},

      ]
    },
    { 
      path : 'products', 
      element: <Outlet />,
      children: [
        { path: "", element: <ProductPage/>},
        { path: "create", element: <CreateProductPage />},
        { path: "update/:id", element: <UpdateProductPage />},
        
      ]
    },
    { path : 'login' , element: <LoginPage />},
    { path : 'signup' , element: <SignUpPage />}
  ]);

  return element;
}

export default Routes;