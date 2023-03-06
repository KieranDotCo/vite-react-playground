import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Contact from "./Contact/Contact";
import Home from "./Home/Home";
import NotFound from "./NotFound/NotFound";
import Paths from "./Paths";

const Router = createBrowserRouter([
  {
    path: Paths.home,
    element: <Main />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: Paths.contact,
        element: <Contact />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default Router