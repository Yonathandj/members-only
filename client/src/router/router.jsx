import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Rootpage from "../pages/Rootpage/Rootpage";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import Error from "../components/Error/Error";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Rootpage />,
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
