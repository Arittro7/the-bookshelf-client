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
        element: <Order></Order>,
        // element: <PrivateRoute><Order></Order></PrivateRoute>,
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
]);

export default router;
