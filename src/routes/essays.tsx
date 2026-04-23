import { createFileRoute } from "@tanstack/react-router";
import { SectionLabel } from "@/components/SectionLabel";

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

const essays = [
  {
    n: "01",
    date: "2026.04",
    minutes: 12,
    tag: "Платформы",
    title:
      "Большой Брат больше не смотрит. Он рекомендует.",
    excerpt:
      "Оруэлловский страх XX века был прозрачен: тебе запрещают. Архитектура XXI века работает иначе — она не запрещает, она предлагает. И этим оказывается куда эффективнее в управлении тем, что ты считаешь своим выбором.",
    featured: true,
  },
  {
    n: "02",
    date: "2026.03",
    minutes: 9,
    tag: "Эпоха ИИ",
    title:
      "Готовый ответ как форма зависимости",
    excerpt:
      "ИИ не делает нас глупее. Он делает нас удобнее. И это разные вещи. Когда вопрос можно не задавать, потому что ответ уже есть, — мышление превращается в роскошь, которую перестают практиковать.",
  },
  {
    n: "03",
    date: "2026.02",
    minutes: 14,
    tag: "Кант",
    title:
      "Просвещение, которое мы отменили",
    excerpt:
      "Двести сорок лет назад Кант объявил программу: выйти из самовольного несовершеннолетия. Сегодня мы возвращаемся в него — но добровольно, через подписку, и платим за это сами.",
  },
  {
    n: "04",
    date: "2026.01",
    minutes: 8,
    tag: "Бердяев",
    title:
      "Безосновная свобода",
    excerpt:
      "Бердяев писал, что свобода глубже бытия. Это не мистика — это указание на то, что свободу нельзя ничем «заслужить» или «получить». Её можно только взять. И за неё нельзя ни на кого сослаться.",
  },
  {
    n: "05",
    date: "2025.12",
    minutes: 11,
    tag: "Арендт",
    title:
      "Когда исчезает разница между фактом и вымыслом",
    excerpt:
      "Арендт описала это как условие тоталитаризма. Сегодня мы подошли к нему другим путём — не через диктатуру, а через переизбыток. Результат, к сожалению, похожий.",
  },
  {
    n: "06",
    date: "2025.11",
    minutes: 7,
    tag: "Ответственность",
    title:
      "Свобода без ответственности — это не свобода",
    excerpt:
      "Это произвол. И первое, чего он требует от человека, — отказаться от способности видеть последствия. Свободный человек последствия видит. И всё равно действует.",
  },
];

function EssaysPage() {
  const [feature, ...rest] = essays;

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
                {feature.title}
              </h2>
              <p className="mt-8 max-w-2xl font-sans text-lg leading-relaxed text-foreground/80">
                {feature.excerpt}
              </p>
              <button className="mt-10 border border-ember bg-transparent px-6 py-3 font-mono text-xs uppercase tracking-widest text-ember transition hover:bg-ember hover:text-primary-foreground">
                читать целиком →
              </button>
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
              <article
                key={e.n}
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
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
