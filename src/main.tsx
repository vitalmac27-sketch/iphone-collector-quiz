import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Client-side rendering / hydration
if (typeof window !== "undefined") {
  const root = document.getElementById("root")!;
  if (root.children.length > 0) {
    hydrateRoot(root, <App />);
  } else {
    createRoot(root).render(<App />);
  }
}

// SSG prerender export for vite-prerender-plugin
export async function prerender(data: { url: string }) {
  const { renderToString } = await import("react-dom/server");
  const { StaticRouter } = await import("react-router-dom/server");
  const { HelmetProvider } = await import("react-helmet-async");
  const { QueryClient, QueryClientProvider } = await import("@tanstack/react-query");
  const { TooltipProvider } = await import("@/components/ui/tooltip");
  const { default: AppRoutes, ALL_ROUTES } = await import("./AppRoutes");

  const queryClient = new QueryClient();
  const helmetContext = {};

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <StaticRouter location={data.url}>
            <AppRoutes />
          </StaticRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );

  return {
    html,
    links: ALL_ROUTES,
  };
}
