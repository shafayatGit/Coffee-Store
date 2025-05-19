import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./MainLayout/MainLayout.jsx";
import Home from "./Components/Home.jsx";
import Add_Coffee from "./Components/Add_Coffee.jsx";
import Update_Coffee from "./Components/Update_Coffee.jsx";
import CofffeeDetailes from "./Components/CofffeeDetailes.jsx";
import Login from "./Components/Login.jsx";
import Register from "./Components/Register.jsx";
import AuthProvider from "./assets/Context/AuthProvider.jsx";
import User from "./Components/User.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        loader: () => fetch("http://localhost:5000/coffees"),
        Component: Home,
      },
      {
        path: "/addCoffee",
        Component: Add_Coffee,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/users",
        loader: () => fetch("http://localhost:5000/users"),
        Component: User,
      },
      {
        path: "/coffee/:id",
        loader: () => fetch("http://localhost:5000/coffees"),
        Component: CofffeeDetailes,
      },
      {
        path: "/updateCoffee/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffees/${params.id}`),
        Component: Update_Coffee,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
