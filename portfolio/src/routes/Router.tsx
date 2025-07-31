import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "./Home";
import NotFound from "./NotFound";
import Project from "./Project";

const Router = createBrowserRouter([
  {
    path: "/", element: (<App/>),
    children:[
      {path:'', element: <Home/>},
      {path:':product', element: <Project/>},
    ],
    errorElement: <NotFound/>
  },
])

export default Router;