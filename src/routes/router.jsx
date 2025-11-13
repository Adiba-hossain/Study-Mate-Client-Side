import { createBrowserRouter } from "react-router";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import FindPartners from "../pages/FindPartners";
import PrivateRoute from "../providers/PrivateRoute";
import PartnerDetails from "../pages/PartnerDetails";
import CreateProfile from "../pages/CreateProfile";
import MyConnections from "../pages/MyConnections";
import Register from "../pages/Register";
import Login from "../pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/find-partners",
        element: <FindPartners />,
      },
      {
        path: "/partner/:id",
        element: (
          <PrivateRoute>
            <PartnerDetails></PartnerDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/create-profile",
        element: (
          <PrivateRoute>
            <CreateProfile></CreateProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-connections",
        element: (
          <PrivateRoute>
            <MyConnections></MyConnections>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/*",
    element: <NotFound />,
  },
]);

export default router;
