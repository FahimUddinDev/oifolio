import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Home2 from "./pages/Home2";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home-2",
    element: <Home2 />,
  },
]);

const Routers = () => <RouterProvider router={routers} />;

export default Routers;
