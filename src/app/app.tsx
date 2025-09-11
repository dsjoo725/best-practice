import { MainPage } from "@/page";

import { QueryProvider } from "./provider/query-provider";

export const App = () => {
  return (
    <QueryProvider>
      <MainPage />
    </QueryProvider>
  );
};
