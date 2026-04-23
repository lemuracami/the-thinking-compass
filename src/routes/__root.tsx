import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-ember">
          error / signal lost
        </div>
        <h1 className="mt-4 font-mono text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 font-mono text-xl text-foreground">
          Страница вне поля зрения
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          То, что вы искали, либо не существует, либо было стёрто. Возвращайтесь
          к началу — и думайте сами.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-ember px-5 py-3 font-mono text-xs uppercase tracking-widest text-primary-foreground transition hover:opacity-90"
          >
            ← к манифесту
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "libertas.exe — самиздат о свободе мышления" },
      {
        name: "description",
        content:
          "Свобода мышления, информационная независимость и ответственность в эпоху алгоритмов. Кант, Гегель, Бердяев, Оруэлл — и практика критики.",
      },
      { name: "author", content: "libertas.exe" },
      { property: "og:title", content: "libertas.exe — самиздат о свободе мышления" },
      {
        property: "og:description",
        content:
          "Свобода мышления, информационная независимость и ответственность в эпоху алгоритмов.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
