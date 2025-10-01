import { HomePage } from "@/page";
import { PaymentPage } from "@/page/payment/ui/payment-page";
import { createBrowserRouter, type RouteObject } from "react-router-dom";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/payment",
    element: <PaymentPage />,
  },
];

export const router = createBrowserRouter(routes);
