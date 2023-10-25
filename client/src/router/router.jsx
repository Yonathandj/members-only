import { createBrowserRouter, RouterProvider } from "react-router-dom";

import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import Error from "../components/Error/Error";
import Landingpage from "../pages/Landingpage/Landingpage";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landingpage />,
      errorElement: <Error />,
    },
    {
      path: "/sign-in",
      element: <SignIn />,
    },
    {
      path: "/sign-up",
      element: <SignUp />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
