import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    // Disabled: the app manages scroll itself (ScrollHandler in __root.tsx
    // always scrolls to top on navigation; TanStack restoration would fight it)
    scrollRestoration: false,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
