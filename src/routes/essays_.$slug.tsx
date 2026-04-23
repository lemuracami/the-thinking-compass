import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { essays, getEssay, type EssayBlock } from "@/data/essays";

export const Route = createFileRoute("/essays_/$slug")({
  loader: ({ params }) => {
    const essay = getEssay(params.slug);
    if (!essay) throw notFound();
    return { essay };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Эссе не найдено — libertas.exe" },
          { name: "description", content: "Запрошенное эссе не найдено." },
        ],
      };
    }
    const { essay } = loaderData;
    const title = `${essay.title} — libertas.exe`;
    return {
      meta: [
        { title },
        { name: "description", content: essay.excerpt },
        { property: "og:title", content: title },
        { property: "og:description", content: essay.excerpt },
        { property: "og:type", content: "article" },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-6 py-32 text-center">
      <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-ember">
        404 / эссе не найдено
      </div>
      <h1 className="mt-6 font-mono text-5xl font-bold text-foreground">
        Текст вне поля зрения
      </h1>
      <Link
        to="/essays"
        className="mt-10 inline-block bg-ember px-6 py-3 font-mono text-xs uppercase tracking-widest text-primary-foreground"
      >
        ← ко всем эссе
      </Link>
    </div>
  ),
  component: EssayPage,
});

function Block({ block }: { block: EssayBlock }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="mt-16 font-mono text-2xl font-bold leading-tight text-foreground md:text-3xl">
          {block.text}
        </h2>
      );
    case "p":
      return (
        <p className="mt-6 font-sans text-base leading-[1.75] text-foreground/85 md:text-lg">
          {block.text}
        </p>
      );
    case "pull":
      return (
        <blockquote className="my-12 border-l-2 border-ember pl-6 font-mono text-2xl font-medium leading-snug text-foreground md:text-3xl">
          {block.text}
        </blockquote>
      );
    case "quote":
      return (
        <figure className="my-12 border-y border-border/60 py-8">
          <blockquote className="font-sans text-xl italic leading-snug text-foreground/90 md:text-2xl">
            «{block.text}»
          </blockquote>
          {block.cite && (
            <figcaption className="mt-4 font-mono text-[11px] uppercase tracking-widest text-ember">
              — {block.cite}
            </figcaption>
          )}
        </figure>
      );
    case "list":
      return (
        <ul className="mt-6 space-y-3 font-sans text-base leading-relaxed text-foreground/85 md:text-lg">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-1 font-mono text-xs text-ember">▸</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
  }
}

function EssayPage() {
  const { essay } = Route.useLoaderData();

  const idx = essays.findIndex((e) => e.slug === essay.slug);
  const prev = essays[idx - 1];
  const next = essays[idx + 1];

  return (
    <article>
      {/* HERO */}
      <header className="border-b border-border/60">
        <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
          <Link
            to="/essays"
            className="font-mono text-[11px] uppercase tracking-widest text-ember"
          >
            ← /essays
          </Link>
          <div className="mt-8 flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            <span className="bg-ember px-1.5 py-0.5 text-primary-foreground">
              № {essay.n}
            </span>
            <span>{essay.tag}</span>
            <span>·</span>
            <span>{essay.date}</span>
            <span>·</span>
            <span>{essay.minutes} мин чтения</span>
          </div>
          <h1 className="mt-8 font-mono text-4xl font-bold leading-[1.05] text-foreground md:text-6xl">
            {essay.title}
          </h1>
          <p className="mt-8 font-sans text-lg leading-relaxed text-foreground/80 md:text-xl">
            {essay.lede}
          </p>
        </div>
      </header>

      {/* BODY */}
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        {essay.body.map((block: EssayBlock, i: number) => (
          <Block key={i} block={block} />
        ))}

        <div className="mt-20 border-t border-border/60 pt-8 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
          // конец передачи
        </div>
      </div>

      {/* NAV */}
      <nav className="border-t border-border/60 bg-coal">
        <div className="mx-auto grid max-w-[1400px] gap-px bg-border md:grid-cols-2">
          {prev ? (
            <Link
              to="/essays/$slug"
              params={{ slug: prev.slug }}
              className="group flex flex-col gap-3 bg-coal p-8 transition hover:bg-card md:p-10"
            >
              <span className="font-mono text-[11px] uppercase tracking-widest text-ember">
                ← предыдущее
              </span>
              <span className="font-mono text-xl font-bold leading-tight text-foreground group-hover:text-ember">
                {prev.title}
              </span>
            </Link>
          ) : (
            <div className="bg-coal p-8 md:p-10" />
          )}
          {next ? (
            <Link
              to="/essays/$slug"
              params={{ slug: next.slug }}
              className="group flex flex-col gap-3 bg-coal p-8 text-right transition hover:bg-card md:p-10"
            >
              <span className="font-mono text-[11px] uppercase tracking-widest text-ember">
                следующее →
              </span>
              <span className="font-mono text-xl font-bold leading-tight text-foreground group-hover:text-ember">
                {next.title}
              </span>
            </Link>
          ) : (
            <Link
              to="/essays"
              className="group flex flex-col gap-3 bg-coal p-8 text-right transition hover:bg-card md:p-10"
            >
              <span className="font-mono text-[11px] uppercase tracking-widest text-ember">
                все →
              </span>
              <span className="font-mono text-xl font-bold leading-tight text-foreground group-hover:text-ember">
                Вернуться к списку эссе
              </span>
            </Link>
          )}
        </div>
      </nav>
    </article>
  );
}
