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
      {path:'Project/:projectId', element: <Project/>},
    ],
    errorElement: <NotFound/>
  },
],
{ basename: import.meta.env.BASE_URL }
)

export default Router;