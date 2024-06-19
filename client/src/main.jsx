import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import Home from "./routes/home/Home";
import Login from "./routes/login/Login";
import NotFound from "./routes/NotFound";
import Layout from "./routes/Layout";
import Settings from "./routes/dashboard/Settings/Settings";
import CreateProduct from "./routes/dashboard/CreateProduct/CreateProduct";
import DashboardLayout from "./routes/dashboard/DashboardLayout";
import Dashboard from "./routes/dashboard/components/Main/Dashboard";
import UpdatePage from "./routes/dashboard/update/UpdatePage";
import ProductsPage from "./routes/Products/ProductsPage";
import SearchPage from "./routes/search/SearchPage";
import ProductIdPage from "./routes/productidpage/ProductIdPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Home /> },
      { path: "login", element: <Login /> },
      { path : "products", element: <ProductsPage/>},
      { path : "search/:title", element: <SearchPage/>},
      { path : "/:id", element: <ProductIdPage/>},
      {
        path: "dashboard",
        element: <DashboardLayout />,
        errorElement: <NotFound />,
        children: [
          { path: "/dashboard", element: <Dashboard /> },
          { path: "settings", element: <Settings /> },
          { path: "create", element: <CreateProduct /> },
          { path: "update/:id", element: <UpdatePage /> },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
