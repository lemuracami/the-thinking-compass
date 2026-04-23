import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionLabel } from "@/components/SectionLabel";

export const Route = createFileRoute("/responsibility")({
  head: () => ({
    meta: [
      { title: "Свобода = Ответственность — libertas.exe" },
      {
        name: "description",
        content:
          "Почему свобода без ответственности превращается в произвол. Этический фундамент свободного мышления.",
      },
      { property: "og:title", content: "Свобода = Ответственность — libertas.exe" },
      {
        property: "og:description",
        content:
          "Свобода — это не право делать что угодно. Это обязанность отвечать за то, что ты делаешь.",
      },
    ],
  }),
  component: ResponsibilityPage,
});

const tenets = [
  {
    n: "I",
    title: "За свои мысли",
    body: "Никто не виноват в том, что вы думаете. Не алгоритм, не школа, не родители, не эпоха. Все они влияют — но решение, какие из этих влияний оставить, всегда ваше. Свобода мысли начинается с принятия её авторства.",
  },
  {
    n: "II",
    title: "За свои слова",
    body: "Слово в эпоху сетей — это действие. Репост — это действие. Лайк — это действие. У всех у них есть последствия, и они складываются. Притворяться, что «я просто высказался», больше нельзя.",
  },
  {
    n: "III",
    title: "За своё внимание",
    body: "Внимание — это валюта эпохи и одновременно ваша единственная неотчуждаемая собственность. То, чему вы её отдаёте, формирует и вас, и мир вокруг. Бесплатных лент не бывает — бывают ленты, за которые платите вы собой.",
  },
  {
    n: "IV",
    title: "За своё незнание",
    body: "«Я не знал» — не оправдание, если вы могли узнать. В мире, где доступ к знанию практически свободен, незнание становится выбором. И за этот выбор отвечает выбравший.",
  },
  {
    n: "V",
    title: "За своё молчание",
    body: "Молчание — это позиция. Иногда мудрая, иногда трусливая. Различить их можете только вы — но различить обязаны. Свободный человек не вправе списывать своё молчание на обстоятельства.",
  },
];

function ResponsibilityPage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="grid-noise pointer-events-none absolute inset-0 opacity-50" />
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-32">
          <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-ember">
            # фундамент / без него ничего не держится
          </div>
          <h1 className="mt-8 font-mono text-[clamp(2.5rem,8vw,7rem)] font-bold leading-[0.92] text-foreground">
            Свобода <span className="ember-text">=</span><br />
            Ответ&shy;ствен&shy;ность<span className="text-ember">.</span>
          </h1>
          <p className="mt-10 max-w-2xl font-sans text-base leading-relaxed text-foreground/80 md:text-lg">
            Это не лозунг. Это уравнение. Левая часть без правой —
            подростковый бунт. Правая без левой — рабство. Они существуют
            только вместе, и порядок прочтения принципиален: ответственность
            не ограничивает свободу, она <em>и есть</em> её содержание.
          </p>
        </div>
      </section>

      {/* OPENING */}
      <section className="border-b border-border/60">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-20 md:grid-cols-12 md:px-10 md:py-28">
          <div className="md:col-span-5">
            <SectionLabel index="§ 0">тезис</SectionLabel>
            <h2 className="mt-10 font-mono text-3xl font-bold leading-tight text-foreground md:text-4xl">
              Свобода — это не право делать что угодно. Это обязанность
              отвечать за то, что делаешь.
            </h2>
          </div>
          <div className="md:col-span-7 md:pt-20">
            <div className="space-y-6 font-sans text-base leading-relaxed text-foreground/85">
              <p>
                Сартр говорил: человек обречён быть свободным. «Обречён» —
                здесь не риторика. Это констатация: даже отказываясь
                выбирать, вы уже выбрали. Ответственность нельзя сложить с
                плеч, потому что вы — её носитель, а не её получатель.
              </p>
              <p>
                Бердяев шёл дальше: свобода первичнее самого бытия. Это
                значит, что её невозможно «заслужить» или «получить от» —
                от государства, от партии, от платформы. Свободу можно
                только{" "}
                <span className="text-ember">взять</span> — и сразу же
                взять и ответственность за неё.
              </p>
              <p>
                Все попытки разделить эти два понятия в истории заканчивались
                одинаково: либо тиранией одного, который «решил за всех»,
                либо хаосом всех, которые «решили за себя» и не подумали о
                других. Третий путь — взросление.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FIVE TENETS */}
      <section className="border-b border-border/60 bg-coal">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
          <SectionLabel index="§ 1—5">пять обязательств</SectionLabel>

          <div className="mt-16 grid gap-px bg-border md:grid-cols-2">
            {tenets.map((t) => (
              <article
                key={t.n}
                className="flex gap-6 bg-background p-8 md:p-10"
              >
                <div className="font-mono text-5xl font-bold text-ember/40 md:text-6xl">
                  {t.n}
                </div>
                <div>
                  <h3 className="font-mono text-2xl font-bold text-foreground">
                    {t.title}
                  </h3>
                  <p className="mt-4 font-sans text-sm leading-relaxed text-muted-foreground">
                    {t.body}
                  </p>
                </div>
              </article>
            ))}
            <div className="flex items-center justify-center bg-ember p-10 text-primary-foreground">
              <div className="text-center">
                <div className="font-mono text-[11px] uppercase tracking-widest opacity-80">
                  итог
                </div>
                <p className="mt-4 font-mono text-xl font-bold leading-tight md:text-2xl">
                  Если вы готовы подписаться под этими пятью пунктами —
                  вы свободны.<br />
                  Если нет — вас всего лишь ещё не контролируют.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center md:px-10 md:py-32">
          <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-ember">
            // виктор франкл
          </div>
          <blockquote className="mt-8 font-mono text-3xl font-medium leading-snug text-foreground md:text-4xl">
            «Свобода — это лишь часть истории, и половина правды. Свобода —
            это лишь негативный аспект явления, чьим положительным аспектом
            является{" "}
            <span className="ember-text">ответственность</span>.»
          </blockquote>
          <p className="mt-10 font-sans text-base text-muted-foreground">
            Он предлагал поставить на западном побережье США Статую
            Ответственности — рядом со Статуей Свободы. Без неё вторая
            не работает.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <h2 className="font-mono text-4xl font-bold leading-tight text-foreground md:text-5xl">
              Дальше — <span className="ember-text">практика</span>.
            </h2>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link
                to="/practices"
                className="bg-ember px-6 py-3 font-mono text-xs uppercase tracking-widest text-primary-foreground transition hover:opacity-90"
              >
                семь упражнений →
              </Link>
              <Link
                to="/thinkers"
                className="border border-border px-6 py-3 font-mono text-xs uppercase tracking-widest text-foreground transition hover:border-ember hover:text-ember"
              >
                к мыслителям
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
