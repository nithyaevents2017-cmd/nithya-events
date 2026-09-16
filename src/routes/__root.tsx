import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { FloatingContact } from "../components/FloatingContact";
import { SITE_URL } from "../config";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    // Error tracking removed
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "robots", content: "index, follow" },
      { name: "googlebot", content: "index, follow" },
      { title: "Event Management & Wedding Planners in Karimnagar | NithyA EventS" },
      {
        name: "description",
        content:
          "NithyA EventS creates memorable weddings, corporate events, cultural celebrations and private events in Karimnagar with creative planning and professional execution.",
      },
      { name: "author", content: "NithyA EventS" },
      { property: "og:title", content: "Event Management & Wedding Planners in Karimnagar | NithyA EventS" },
      { property: "og:description",
        content:
          "NithyA EventS creates memorable weddings, corporate events, cultural celebrations and private events in Karimnagar with creative planning and professional execution.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_IN" },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: `${SITE_URL}/favicon.png` },
      { property: "og:site_name", content: "NithyA EventS" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@NithyaEvents" },
      { name: "twitter:title", content: "Event Management & Wedding Planners in Karimnagar | NithyA EventS" },
      { name: "twitter:description", content: "NithyA EventS creates memorable weddings, corporate events, cultural celebrations and private events in Karimnagar with creative planning and professional execution." },
      { name: "twitter:image", content: `${SITE_URL}/favicon.png` },
      { name: "theme-color", content: "#ffffff" },
    ],
    links: [
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Great+Vibes&family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400..800;1,400..700&display=swap",
      },
    ],
    scripts: [
      {
        src: "https://elfsightcdn.com/platform.js",
        async: true,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "NithyA EventS",
    "image": `${SITE_URL}/favicon.png`,
    "@id": SITE_URL,
    "url": SITE_URL,
    "telephone": "+919030119257",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "MJS Business Centre, 2nd floor, Gandhi Rd, Islampura, Sai Nagar",
      "addressLocality": "Karimnagar",
      "addressRegion": "Telangana",
      "postalCode": "505001",
      "addressCountry": "IN"
    }
  };

  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </head>
      <body className="overflow-x-hidden w-full">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
      <Footer />
      <FloatingContact />
      <div className="fixed top-0 left-0 pointer-events-none">
        <div className="elfsight-app-2266d839-24da-4759-b1ca-caf2780f629b pointer-events-auto" data-elfsight-app-lazy suppressHydrationWarning></div>
      </div>
    </QueryClientProvider>
  );
}
