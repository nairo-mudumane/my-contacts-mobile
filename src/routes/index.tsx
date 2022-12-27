import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppRoutes } from "./app.routes";

const client = new QueryClient();

export function Routes() {
  return (
    <QueryClientProvider client={client}>
      <AppRoutes />
    </QueryClientProvider>
  );
}
