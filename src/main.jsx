import React from "react";
import ReactDOM from "react-dom/client";
import MainLayout from "./layout/MainLayout";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
const backendUrl = import.meta.env.VITE_BACKEND_URL

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () => await fetch(backendUrl)
        
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
