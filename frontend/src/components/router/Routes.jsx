import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorMessage from "../common/errors/ErrorMessage";
import Home from "../common/home/Home";
import Cart from "../../pages/product/Cart";
import Checkout from "../../pages/product/Checkout";
import Login from "../auth/admin/auth/Login";
import Dashboard from "../auth/admin/dashboard/Dashboard";
import AdminPrivateRoute from "./AdminPrivateRoute";
import LatestProducts from "../../pages/product/LatestProducts";
import ProductDetails from "../../pages/product/ProductDetails";
import Categories from "../auth/admin/category/Categories";
import CreateCategory from "../auth/admin/category/CreateCategory";
import EditCategory from "../auth/admin/category/EditCategory";
import Brand from "../auth/admin/brand/Brands";
import EditBrand from "../auth/admin/brand/EditBrand";
import CreateBrand from "../auth/admin/brand/CreateBrand";
import CreateProduct from "../auth/admin/product/CreateProduct";
import EditProduct from "../auth/admin/product/EditProduct";
import Products from "../auth/admin/product/products";

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
        // categories routes is here
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
        },
        {
          path:"/admin/categories/edit/:id",
          element: (
          <AdminPrivateRoute>
            <EditCategory/>
          </AdminPrivateRoute>
          ),
        },
        // brands routes is here
        {
          path:"/admin/brands",
          element: (
          <AdminPrivateRoute>
            <Brand/>
          </AdminPrivateRoute>
          ),
        },
        {
          path:"/admin/brands/create",
          element: (
          <AdminPrivateRoute>
            <CreateBrand/>
          </AdminPrivateRoute>
          ),
        },
        {
          path:"/admin/brands/edit/:id",
          element: (
          <AdminPrivateRoute>
            <EditBrand/>
          </AdminPrivateRoute>
          ),
        },
           // products routes is here
           {
            path:"/admin/products",
            element: (
            <AdminPrivateRoute>
              <Products/>,
            </AdminPrivateRoute>
            ),
          },
          {
            path:"/admin/products/create",
            element: (
            <AdminPrivateRoute>
              <CreateProduct/>
            </AdminPrivateRoute>
            ),
          },
          {
            path:"/admin/products/edit/:id",
            element: (
            <AdminPrivateRoute>
              <EditProduct/>
            </AdminPrivateRoute>
            ),
          },
      ],
    },
  ]);
  