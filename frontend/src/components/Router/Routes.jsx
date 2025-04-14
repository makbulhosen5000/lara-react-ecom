import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import ErrorMessage from "../Errors/ErrorMessage";

import Home from "../common/Home";
import Shop from "../common/Shop";
import Mens from "../common/Mens";
import Women from "../common/Women";
import Kids from "../common/Kids";



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
          element:<Mens/>
        },
        {
          path:"/women",
          element:<Women/>
        },
        {
          path:"/kids",
          element:<Kids/>
        },

  

      ],
    },
  ]);
  