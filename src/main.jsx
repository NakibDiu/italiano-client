import React from "react";
import ReactDOM from "react-dom/client";
import MainLayout from "./layout/MainLayout";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import AuthProviders from "./providers/AuthProviders";
import Recipes from "./components/Recipes";
import ErrorPage from "./components/ErrorPage";
import Blogs from "./components/Blogs";
import PrivateRoutes from "./components/PrivateRoutes";
const backendUrl = import.meta.env.VITE_BACKEND_URL;

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: < ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () => await fetch(backendUrl),
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/:id/recipes",
        element: <PrivateRoutes><Recipes /></PrivateRoutes> ,
        loader: async ({ params }) => await fetch(`${backendUrl}${params.id}/recipes`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>
);
