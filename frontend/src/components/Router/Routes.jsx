import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import ErrorMessage from "../Errors/ErrorMessage";
import Home from "../Common/Home";
import Shop from "../Common/Shop";
import Mens from "../Common/Mens";
import Women from "../Common/Women";
import Kids from "../Common/Kids";



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
  