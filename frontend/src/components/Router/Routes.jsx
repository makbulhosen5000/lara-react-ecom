import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import ErrorMessage from "../Errors/ErrorMessage";
import Home from "../common/Home/Home";
import Banana from "../../pages/categories/Banana/Banana";
import Coconut from "../../pages/categories/Coconut/Coconut";
import Guava from "../../pages/categories/Guava/Guava";
import Lemon from "../../pages/categories/Lemon/Lemon";
import Papaya from "../../pages/categories/Papaya/Papaya";
import Hens from "../../pages/categories/Hens/Hens";
import Duck from "../../pages/categories/Duck/Duck";
import Cart from "../../pages/product/Cart";
import Checkout from "../../pages/product/Checkout";
import Login from "../Auth/Admin/Login";
import Dashboard from "../Auth/Admin/Dashboard";
import AdminPrivateRoute from "./AdminPrivateRoute";
import LatestProducts from "../../pages/product/LatestProducts";
import ProductDetails from "../../pages/product/ProductDetails";

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
        {
          path:"/banana",
          element:<Banana/>
        },
        {
          path:"/coconut",
          element:<Coconut/>
        },
        {
          path:"/guava",
          element:<Guava/>
        },
        {
          path:"/lemon",
          element:<Lemon/>
        },
        {
          path:"/papaya",
          element:<Papaya/>
        },
        {
          path:"/hens",
          element:<Hens/>
        },
        {
          path:"/duck",
          element:<Duck/>
        },

        //admin routes
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
        }
      ],
    },
  ]);
  