import { httpBatchLink } from "@trpc/client";
import { createTRPCNext } from "@trpc/next";
import superjson from "superjson";
import type { AppRouter } from "../pages/api/trpc/[trpc]";

function getBaseUrl() {
  if (typeof window !== "undefined") {
    // In the browser, we return a relative URL
    return "";
  }
  // assume localhost
  return `http://localhost:${process.env.PORT ?? 3000}`;
}

export const trpc = createTRPCNext<AppRouter>({
  config() {
    return {
      transformer: superjson,
      links: [
        httpBatchLink({
          url: getBaseUrl() + "/api/trpc",
        }),
      ],
    };
  },
  ssr: true,
});
