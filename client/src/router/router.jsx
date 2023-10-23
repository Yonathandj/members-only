import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Rootpage from "../urlComponents/Rootpage/Rootpage";
import SignIn from "../urlComponents/SignIn/SignIn";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Rootpage />,
    },
    {
      path: "/sign-in",
      element: <SignIn />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
