import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Root from "../Layout/Root";
import Order from "../Components/Order";
import Login from "../Pages/Shared/Login";
import Register from "../Pages/Shared/Register";
import Cart from "../Components/Cart/Cart";
import Checkout from "../Components/Checkout/Checkout";
import Book from "../Components/Books/Book";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import AdminLogin from "../Pages/Admin/AdminLogin";
import DashboardLayout from "../Components/Dashboard/DashboardLayout";
import Dashboard from "../Components/Dashboard/Dashboard";
import UpdateBook from "../Components/Dashboard/UpdateBook/UpdateBook";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/orders",
        element: <PrivateRoute><Order></Order></PrivateRoute>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/cart",
        element: <PrivateRoute><Cart></Cart></PrivateRoute>,
      },
      {
        path: "/books/:id",
        element: <Book></Book>,
      },
      {
        path: "/checkout",
        element: (
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLogin></AdminLogin>
  },
  // Routes for administrative
  {
    path: "/dashboard",
    element: <AdminRoute><DashboardLayout></DashboardLayout></AdminRoute>,
    children: [
      {
        path: "",
        element: <AdminRoute><Dashboard></Dashboard></AdminRoute>
      },
      {
        path: "add-book",
        element: <AdminRoute><div>Add a book</div></AdminRoute>
      },
      {
        path: "edit-Book/:id",
        element:<AdminRoute><div>Edit a book</div></AdminRoute>
      },
      {
        path: "update-book",
        element: <AdminRoute><UpdateBook></UpdateBook></AdminRoute>
      }
    ]
  }
]);

export default router;
