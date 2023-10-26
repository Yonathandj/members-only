import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import Error from "../components/Error/Error";
import Homepage from "../pages/Homepage/Homepage";
import Landingpage from "../pages/Landingpage/Landingpage";

import { useContext } from "react";
import { authContext } from "../context/AuthProvider";

const Router = () => {
  const { user } = useContext(authContext);
  const router = createBrowserRouter([
    {
      path: "/",
      element: user.userId === null ? <Landingpage /> : <Navigate to={"/rooms"} />,
      errorElement: <Error />,
    },
    {
      path: "/sign-in",
      element: user.userId === null ? <SignIn /> : <Navigate to={"/rooms"} />,
    },
    {
      path: "/sign-up",
      element: user.userId === null ? <SignUp /> : <Navigate to={"/rooms"} />,
    },
    {
      path: "/rooms",
      element: user.userId !== null ? <Homepage /> : <Navigate to={"/"} />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
