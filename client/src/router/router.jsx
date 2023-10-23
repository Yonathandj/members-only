import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Rootpage from "../components/Rootpage/Rootpage";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Rootpage />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
