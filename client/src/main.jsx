import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import Home from "./routes/home/Home";
import Login from "./routes/login/Login";
import NotFound from "./routes/NotFound";
import Dashboard from "./routes/dashboard/Dashboard";
import Layout from "./routes/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home />, errorElement: <NotFound /> },
      { path: "login", element: <Login />, errorElement: <NotFound /> },
      { path: "dashboard", element: <Dashboard />, errorElement: <NotFound /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
