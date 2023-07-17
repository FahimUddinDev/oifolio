import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Home2 from "./pages/Home2";
import Home3 from "./pages/Home3";
import Home4 from "./pages/Home4";
import Home5 from "./pages/Home5";
import Home6 from "./pages/Home6";
import Home7 from "./pages/Home7";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio";
import Portfolio2 from "./pages/Portfolio2";
import Portfolio3 from "./pages/Portfolio3";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import ProjectDetails from "./pages/ProjectDetails";
import Contact from "./pages/Contact";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home-2",
    element: <Home2 />,
  },
  {
    path: "/home-3",
    element: <Home3 />,
  },
  {
    path: "/home-4",
    element: <Home4 />,
  },
  {
    path: "/home-5",
    element: <Home5 />,
  },
  {
    path: "/home-6",
    element: <Home6 />,
  },
  {
    path: "/home-7",
    element: <Home7 />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/portfolio-1",
    element: <Portfolio />,
  },
  {
    path: "/portfolio-2",
    element: <Portfolio2 />,
  },
  {
    path: "/portfolio-3",
    element: <Portfolio3 />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/blog-details",
    element: <BlogDetails />,
  },
  {
    path: "/project-details",
    element: <ProjectDetails />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

const Routers = () => <RouterProvider router={routers} />;

export default Routers;
