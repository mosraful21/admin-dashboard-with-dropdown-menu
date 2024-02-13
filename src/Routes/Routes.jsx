import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../Layout/AdminLayout";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Customer from "../Pages/Customer/Customer";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <AdminLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/customers",
        element: <Customer />,
      },
    ],
  },
]);

export default routes;
