import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import Home from "./routes/home/Home";
import Login from "./routes/login/Login";
import NotFound from "./routes/NotFound";
import Layout from "./routes/Layout";
import Settings from "./routes/Settings/Settings";
import CreateProductPage from "./routes/CreateProduct/CreateProduct";
import DashboardLayout from "./routes/dashboard/DashboardLayout";
import Dashboard from "./routes/dashboard/components/Main/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Home /> },
      { path: "login", element: <Login /> },
      {
        path: "dashboard",
        element: <DashboardLayout />,
        errorElement: <NotFound />,
        children: [
          { path: "/dashboard", element: <Dashboard /> },
          { path: "settings", element: <Settings /> },
          { path: "create", element: <CreateProductPage /> },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
