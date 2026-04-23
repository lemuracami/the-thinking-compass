import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionLabel } from "@/components/SectionLabel";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Манифест — libertas.exe" },
      {
        name: "description",
        content:
          "Манифест свободы мышления: критика, ответственность и информационная независимость в эпоху платформ.",
      },
      { property: "og:title", content: "Манифест — libertas.exe" },
      {
        property: "og:description",
        content:
          "Манифест свободы мышления: критика, ответственность и информационная независимость.",
      },
    ],
  }),
  component: Index,
});

const dispatches = [
  {
    n: "01",
    slug: "big-brother-recommends",
    title: "Алгоритм решает, что вы прочтёте дальше",
    excerpt:
      "Лента — не зеркало мира, а его коммерческая интерпретация. Свобода начинается там, где вы выбираете не следующий клик, а следующий вопрос.",
    tag: "Информационная среда",
  },
  {
    n: "02",
    slug: "ready-made-answer",
    title: "Готовый ответ дешевле собственного",
    excerpt:
      "Чем больше доступной информации, тем реже мы думаем сами. Цена удобства — атрофия суждения. Кант называл это несовершеннолетием — и считал виной самого человека.",
    tag: "Эпоха ИИ",
  },
  {
    n: "03",
    slug: "berdyaev-groundless-freedom",
    title: "Платформа растёт за ваш счёт — и вашими руками",
    excerpt:
      "Сначала вас привлекают. Потом продают вам мир, выгодный платформе. Бердяев писал: дух свободен только тогда, когда не служит чужой необходимости.",
    tag: "Капитал внимания",
  },
];

const principles = [
  {
    k: "Сомневайся в источнике",
    v: "Не в смысле паранойи, а в смысле гигиены. У каждого текста есть автор, у каждого автора — интерес.",
  },
  {
    k: "Различай факт и интерпретацию",
    v: "Факты редки и скучны. Интерпретации яркие и бесплатные. Это не случайно.",
  },
  {
    k: "Допусти, что ты не прав",
    v: "Способность изменить мнение под давлением аргумента, а не толпы — главный признак свободного ума.",
  },
  {
    k: "Возьми ответственность",
    v: "Свобода без ответственности — это произвол. Свобода с ответственностью — это взросление.",
  },
];

function Index() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="grid-noise pointer-events-none absolute inset-0 opacity-60" />
        <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-20 md:grid-cols-12 md:px-10 md:py-32">
          <div className="md:col-span-8">
            <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-ember">
              # выпуск 001 — манифест
            </div>
            <h1 className="mt-8 font-mono text-[clamp(2.5rem,7vw,6rem)] font-bold leading-[0.95] tracking-tight text-foreground">
              Думай.<br />
              <span className="ember-text">Сам.</span><span className="blink-caret" />
            </h1>
            <p className="mt-8 max-w-xl font-sans text-base leading-relaxed text-foreground/80 md:text-lg">
              Никогда у человека не было столько информации — и никогда он так
              мало не думал. Это сайт о свободе мышления: о том, как остаться
              собой среди готовых ответов, рекомендованных лент и удобных
              истин.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/essays"
                className="bg-ember px-6 py-3 font-mono text-xs uppercase tracking-widest text-primary-foreground transition hover:opacity-90"
              >
                читать эссе →
              </Link>
              <Link
                to="/responsibility"
                className="border border-border px-6 py-3 font-mono text-xs uppercase tracking-widest text-foreground transition hover:border-ember hover:text-ember"
              >
                свобода = ответственность
              </Link>
            </div>
          </div>

          <aside className="md:col-span-4">
            <div className="hard-shadow border border-border bg-card p-6">
              <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                сводка / эпоха
              </div>
              <ul className="mt-6 space-y-5 font-mono text-xs leading-relaxed text-foreground/85">
                <li>
                  <span className="text-ember">▸</span> 4.7 млрд людей живут
                  в ленте, отсортированной не ими
                </li>
                <li>
                  <span className="text-ember">▸</span> 60 секунд — среднее
                  время, отведённое мысли в день
                </li>
                <li>
                  <span className="text-ember">▸</span> «Большой Брат
                  смотрит на тебя» — теперь он ещё и рекомендует
                </li>
                <li className="border-t border-border/60 pt-5 italic text-muted-foreground">
                  «Свобода — это право говорить людям то, чего они не хотят
                  слышать.» <span className="not-italic">— Оруэлл</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* DISPATCHES */}
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
          <SectionLabel index="§ 01">диагноз эпохи</SectionLabel>

          <div className="mt-12 grid gap-px bg-border md:grid-cols-3">
            {dispatches.map((d) => (
              <Link
                key={d.n}
                to="/essays/$slug"
                params={{ slug: d.slug }}
                className="group relative block bg-background p-8 transition hover:bg-card md:p-10"
              >
                <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  <span>dispatch {d.n}</span>
                  <span className="text-ember">{d.tag}</span>
                </div>
                <h3 className="mt-8 font-mono text-2xl font-bold leading-tight text-foreground transition group-hover:text-ember">
                  {d.title}
                </h3>
                <p className="mt-5 font-sans text-sm leading-relaxed text-muted-foreground">
                  {d.excerpt}
                </p>
                <div className="mt-8 h-px w-12 bg-ember transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* MAGAZINE FEATURE */}
      <section className="border-b border-border/60 bg-coal">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-20 md:grid-cols-12 md:px-10 md:py-32">
          <div className="md:col-span-5">
            <SectionLabel index="§ 02">передовица</SectionLabel>
            <h2 className="mt-10 font-mono text-4xl font-bold leading-tight text-foreground md:text-5xl">
              <Link
                to="/essays/$slug"
                params={{ slug: "big-brother-recommends" }}
                className="transition hover:text-ember"
              >
                Большой Брат больше не смотрит. Он{" "}
                <span className="ember-text">рекомендует</span>.
              </Link>
            </h2>
            <p className="mt-8 font-sans text-base leading-relaxed text-foreground/80">
              Оруэлл представлял власть как сапог, наступающий на лицо
              человека — вечно. Но реальность XXI века оказалась мягче и
              опаснее. Никто не запрещает вам думать. Просто за вас уже
              подумали — и подсунули результат в формате короткого видео.
            </p>
            <p className="mt-5 font-sans text-base leading-relaxed text-foreground/80">
              Цензура старого мира работала через запрет. Цензура нового мира
              работает через избыток. Утопить в шуме оказалось эффективнее,
              чем заглушить.
            </p>
            <Link
              to="/essays/$slug"
              params={{ slug: "big-brother-recommends" }}
              className="mt-10 inline-block border-b border-ember pb-1 font-mono text-xs uppercase tracking-widest text-ember"
            >
              читать целиком →
            </Link>
          </div>

          <div className="md:col-span-7">
            <div className="scanlines border border-border bg-background p-8 md:p-12">
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                $ cat /etc/freedom.conf
              </div>
              <pre className="mt-6 overflow-x-auto font-mono text-xs leading-relaxed text-foreground/90 md:text-sm">
{`# принципы критического мышления
[mind]
  default_state    = doubt
  source_check     = always
  algorithm_trust  = false
  comfort_truth    = reject

[freedom]
  responsibility   = required
  herd_immunity    = off
  silence          = permitted
  question         = encouraged

[output]
  echo "не верь даже этому файлу"
  echo "проверь сам."`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
          <SectionLabel index="§ 03">четыре правила</SectionLabel>
          <h2 className="mt-10 max-w-3xl font-mono text-4xl font-bold leading-tight text-foreground md:text-5xl">
            Критическое мышление — это{" "}
            <span className="text-ember">привычка</span>, а не талант.
          </h2>

          <div className="mt-16 grid gap-12 md:grid-cols-2">
            {principles.map((p, i) => (
              <div key={p.k} className="flex gap-6">
                <div className="font-mono text-5xl font-bold text-ember/30">
                  0{i + 1}
                </div>
                <div>
                  <h3 className="font-mono text-xl font-bold text-foreground">
                    {p.k}
                  </h3>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-muted-foreground">
                    {p.v}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <Link
              to="/practices"
              className="inline-flex items-center gap-3 border border-border px-6 py-3 font-mono text-xs uppercase tracking-widest text-foreground transition hover:border-ember hover:text-ember"
            >
              практика критики → метод и упражнения
            </Link>
          </div>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section className="border-b border-border/60 bg-coal">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center md:px-10 md:py-32">
          <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-ember">
            // бердяев, философия свободы
          </div>
          <blockquote className="mt-8 font-mono text-3xl font-medium leading-snug text-foreground md:text-5xl">
            «Свобода есть{" "}
            <span className="ember-text">безосновная основа</span> бытия —
            и она глубже всякого бытия».
          </blockquote>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
          <div className="grid gap-12 md:grid-cols-2 md:items-end">
            <div>
              <SectionLabel index="§ 04">дальше</SectionLabel>
              <h2 className="mt-10 font-mono text-4xl font-bold leading-tight text-foreground md:text-5xl">
                Свобода — это{" "}
                <span className="ember-text">ответственность</span>.<br />
                Не наоборот.
              </h2>
            </div>
            <p className="font-sans text-base leading-relaxed text-foreground/80">
              Кант требовал: «Имей мужество пользоваться своим собственным
              умом». Это требование — не лозунг. Это работа. Каждый день, по
              отношению к каждому источнику, к каждой мысли — включая
              собственную.
            </p>
          </div>

          <div className="mt-12 grid gap-px bg-border md:grid-cols-3">
            <Link
              to="/thinkers"
              className="group bg-background p-8 transition hover:bg-card"
            >
              <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                → раздел
              </div>
              <div className="mt-4 font-mono text-2xl font-bold text-foreground group-hover:text-ember">
                Мыслители
              </div>
              <p className="mt-3 font-sans text-sm text-muted-foreground">
                Кант, Гегель, Милль, Бердяев, Арендт, Хайек.
              </p>
            </Link>
            <Link
              to="/practices"
              className="group bg-background p-8 transition hover:bg-card"
            >
              <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                → раздел
              </div>
              <div className="mt-4 font-mono text-2xl font-bold text-foreground group-hover:text-ember">
                Практики
              </div>
              <p className="mt-3 font-sans text-sm text-muted-foreground">
                Семь упражнений, чтобы вернуть себе мышление.
              </p>
            </Link>
            <Link
              to="/responsibility"
              className="group bg-background p-8 transition hover:bg-card"
            >
              <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                → раздел
              </div>
              <div className="mt-4 font-mono text-2xl font-bold text-foreground group-hover:text-ember">
                Ответственность
              </div>
              <p className="mt-3 font-sans text-sm text-muted-foreground">
                Почему свобода без неё превращается в произвол.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
