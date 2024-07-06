import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home/Home/Home";
import Projects from "../../components/Projects/Projects";
import AboutMe from "../../components/AboutMe/AboutMe";
import Contact from "../../components/Contact/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
