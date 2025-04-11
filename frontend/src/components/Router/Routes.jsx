import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import ErrorMessage from "../Errors/ErrorMessage";
import Home from "../Common/Home";
import Shop from "../Common/Shop";



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
          path:"/shop",
          element:<Shop/>
        },
        {
          path:"/mens",
          element:<Shop/>
        },
        {
          path:"/women",
          element:<Shop/>
        },
        {
          path:"/kids",
          element:<Shop/>
        },

  

      ],
    },
  ]);
  