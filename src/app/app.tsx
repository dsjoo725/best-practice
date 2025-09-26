import { RouterProvider } from "react-router-dom";

import { QueryProvider } from "./provider/query-provider";
import { router } from "./routes/router";

export const App = () => {
  return (
    <QueryProvider>
      <RouterProvider router={router} />
    </QueryProvider>
  );
};
