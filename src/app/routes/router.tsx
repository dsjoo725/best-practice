import { HomePage } from "@/page";
import { createBrowserRouter, type RouteObject } from "react-router-dom";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
  },
];

export const router = createBrowserRouter(routes);
