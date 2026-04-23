import { Link } from "@tanstack/react-router";

const nav = [
  { to: "/", label: "Манифест" },
  { to: "/thinkers", label: "Мыслители" },
  { to: "/practices", label: "Практики" },
  { to: "/essays", label: "Эссе" },
  { to: "/responsibility", label: "Ответственность" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-6 py-4 md:px-10">
        <Link to="/" className="group flex items-center gap-3">
          <span className="flex h-7 w-7 items-center justify-center bg-ember text-primary-foreground font-mono text-xs font-bold">
            //
          </span>
          <span className="font-mono text-sm uppercase tracking-[0.2em] text-foreground">
            libertas<span className="text-ember">.exe</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="px-3 py-2 font-mono text-xs uppercase tracking-wider text-muted-foreground transition hover:text-ember"
              activeProps={{
                className:
                  "px-3 py-2 font-mono text-xs uppercase tracking-wider text-ember border-b border-ember",
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden font-mono text-[10px] uppercase tracking-widest text-muted-foreground md:block">
          <span className="mr-2 inline-block h-2 w-2 animate-pulse bg-ember" />
          signal active
        </div>
      </div>

      {/* mobile */}
      <nav className="flex gap-1 overflow-x-auto border-t border-border/60 px-4 py-2 md:hidden">
        {nav.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            activeOptions={{ exact: item.to === "/" }}
            className="whitespace-nowrap px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-muted-foreground"
            activeProps={{
              className:
                "whitespace-nowrap px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-ember",
            }}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
