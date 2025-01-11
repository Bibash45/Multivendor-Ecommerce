import { lazy } from "react";
const Home = lazy(() => import("../../pages/Home"));

export const sellerRoutes = [
  {
    path: "/",
    element: <Home />,
    ability: ["admin", "seller"],
  },
];
