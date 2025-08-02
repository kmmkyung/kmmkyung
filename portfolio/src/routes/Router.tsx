import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "./Home/Home";
import NotFound from "./NotFound/NotFound";
import Project from "./Project/Project";

const Router = createBrowserRouter([
  {
    path: "/", element: (<App/>),
    children:[
      {path:'', element: <Home/>},
      {path:'Project/:project', element: <Project/>},
    ],
    errorElement: <NotFound/>
  },
])

export default Router;