import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionLabel } from "@/components/SectionLabel";
import { essays } from "@/data/essays";

export const Route = createFileRoute("/essays")({
  head: () => ({
    meta: [
      { title: "Эссе — libertas.exe" },
      {
        name: "description",
        content:
          "Эссе о свободе мышления, информационных платформах и алгоритмической эпохе.",
      },
      { property: "og:title", content: "Эссе — libertas.exe" },
      {
        property: "og:description",
        content:
          "Длинное чтение о свободе, ответственности и критическом разуме.",
      },
    ],
  }),
  component: EssaysPage,
});

function EssaysPage() {
  const feature = essays.find((e) => e.featured) ?? essays[0];
  const rest = essays.filter((e) => e.slug !== feature.slug);

  return (
    <div>
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
          <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-ember">
            # длинное чтение
          </div>
          <h1 className="mt-6 font-mono text-5xl font-bold leading-[1] text-foreground md:text-7xl">
            Эссе<span className="text-ember">.</span>
          </h1>
          <p className="mt-8 max-w-2xl font-sans text-base leading-relaxed text-foreground/80 md:text-lg">
            Тексты, которые невозможно пролистать. Здесь нет TL;DR — это
            принципиально. Если идея уместилась в одно предложение, её
            обычно не было.
          </p>
        </div>
      </section>

      {/* FEATURE */}
      <section className="border-b border-border/60 bg-coal">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
          <SectionLabel index="01">передовица</SectionLabel>
          <article className="mt-12 grid gap-12 md:grid-cols-12">
            <div className="md:col-span-8">
              <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                {feature.date} · {feature.tag} · {feature.minutes} мин
              </div>
              <h2 className="mt-6 font-mono text-4xl font-bold leading-[1.05] text-foreground md:text-6xl">
                <Link
                  to="/essays/$slug"
                  params={{ slug: feature.slug }}
                  className="transition hover:text-ember"
                >
                  {feature.title}
                </Link>
              </h2>
              <p className="mt-8 max-w-2xl font-sans text-lg leading-relaxed text-foreground/80">
                {feature.excerpt}
              </p>
              <Link
                to="/essays/$slug"
                params={{ slug: feature.slug }}
                className="mt-10 inline-block border border-ember bg-transparent px-6 py-3 font-mono text-xs uppercase tracking-widest text-ember transition hover:bg-ember hover:text-primary-foreground"
              >
                читать целиком →
              </Link>
            </div>
            <aside className="md:col-span-4">
              <div className="scanlines h-full border border-border bg-background p-6">
                <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  фрагмент
                </div>
                <p className="mt-5 font-sans text-sm leading-relaxed text-foreground/85">
                  «Цензура старого мира работала через запрет. Цензура нового
                  мира работает через избыток. Утопить в шуме оказалось
                  эффективнее, чем заглушить.»
                </p>
                <p className="mt-4 font-sans text-sm leading-relaxed text-foreground/85">
                  «Никто не приставлял к вам охранника. Вы сами носите его
                  в кармане — и заряжаете его каждую ночь.»
                </p>
              </div>
            </aside>
          </article>
        </div>
      </section>

      {/* GRID */}
      <section>
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
          <SectionLabel index="ls">/essays</SectionLabel>

          <div className="mt-12 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
            {rest.map((e) => (
              <Link
                key={e.slug}
                to="/essays/$slug"
                params={{ slug: e.slug }}
                className="group flex flex-col gap-6 bg-background p-8 transition hover:bg-card md:p-10"
              >
                <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-widest">
                  <span className="text-ember">{e.tag}</span>
                  <span className="text-muted-foreground">
                    {e.date} · {e.minutes} мин
                  </span>
                </div>
                <h3 className="font-mono text-2xl font-bold leading-tight text-foreground group-hover:text-ember">
                  {e.title}
                </h3>
                <p className="font-sans text-sm leading-relaxed text-muted-foreground">
                  {e.excerpt}
                </p>
                <div className="mt-auto font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  читать →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
