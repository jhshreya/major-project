import {
    createBrowserRouter,

  } from "react-router-dom";
  import App from "../App";
  import Home from "../Pages/Home";
import CreateJobs from "../Pages/CreateJobs";
import JobDetails from "../Pages/JobDetails";
  
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
            path:"/",
            element:<Home/>
        },
        {
          path:"/post-job",
          element:<CreateJobs/>
        },
        {
          path:"/job/:id",
          element:<JobDetails/>
        }

        
      ]
    },
  ]);

  export default router