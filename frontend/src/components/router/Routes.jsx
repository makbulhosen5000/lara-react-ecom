import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorMessage from "../common/errors/ErrorMessage";
import Home from "../common/home/Home";
import Cart from "../../pages/product/Cart";
import Checkout from "../../pages/product/Checkout";
import Login from "../auth/admin/Login";
import Dashboard from "../auth/admin/Dashboard";
import AdminPrivateRoute from "./AdminPrivateRoute";
import LatestProducts from "../../pages/product/LatestProducts";
import ProductDetails from "../../pages/product/ProductDetails";
import Categories from "../../pages/category/Categories";
import CreateCategory from "../../pages/category/CreateCategory";

export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main/>,
      errorElement:<ErrorMessage/>,
      children: [
        {
            path:"/",
            element:<Home/>
        },
        {
          path:"/product",
          element:<LatestProducts/>
        },
        {
          path:"/productDetails",
          element:<ProductDetails/>
        },
        {
          path:"/cart",
          element:<Cart/>
        },
        {
          path:"/checkout",
          element:<Checkout/>
        },

        //admin routes here
        {
          path:"/admin/login",
          element:<Login/>,
        },
        {
          path:"/admin/dashboard",
          element: (
          <AdminPrivateRoute>
            <Dashboard />
          </AdminPrivateRoute>
          ),
        },
        {
          path:"/admin/categories",
          element: (
          <AdminPrivateRoute>
            <Categories/>,
          </AdminPrivateRoute>
          ),
        },
        {
          path:"/admin/categories/create",
          element: (
          <AdminPrivateRoute>
            <CreateCategory/>
          </AdminPrivateRoute>
          ),
        }
      ],
    },
  ]);
  