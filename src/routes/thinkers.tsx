import { createFileRoute } from "@tanstack/react-router";
import { SectionLabel } from "@/components/SectionLabel";

export const Route = createFileRoute("/thinkers")({
  head: () => ({
    meta: [
      { title: "Мыслители свободы — libertas.exe" },
      {
        name: "description",
        content:
          "Кант, Гегель, Милль, Бердяев, Арендт, Хайек — голоса, без которых разговор о свободе невозможен.",
      },
      { property: "og:title", content: "Мыслители свободы — libertas.exe" },
      {
        property: "og:description",
        content:
          "Шесть философов о свободе: от Канта до Арендт. Кратко, по существу, без академического жаргона.",
      },
    ],
  }),
  component: ThinkersPage,
});

const thinkers = [
  {
    name: "Иммануил Кант",
    years: "1724 — 1804",
    work: "«Что такое просвещение?» (1784)",
    quote:
      "Имей мужество пользоваться собственным умом — таков девиз просвещения.",
    body: "Кант определил несовершеннолетие как неспособность пользоваться рассудком без чужого руководства. И что важнее — назвал виновным в этом не власть, а самого человека. Лень и трусость держат большинство в добровольной опеке. Свобода у Канта — это работа автономии: подчинение только тем законам, которые ты сам признаёшь разумными.",
    tag: "Автономия разума",
  },
  {
    name: "Г.В.Ф. Гегель",
    years: "1770 — 1831",
    work: "«Феноменология духа» (1807)",
    quote:
      "Всемирная история есть прогресс в сознании свободы.",
    body: "Свобода у Гегеля — не данность, а историческое становление. Сознание проходит путь через раба, господина, отчуждение и возврат к себе. Свободен тот, кто прошёл через противоречие и узнал в нём себя. Поверхностная свобода «делать что хочу» — это ещё несвобода: она зависит от случайных желаний.",
    tag: "Диалектика",
  },
  {
    name: "Джон Стюарт Милль",
    years: "1806 — 1873",
    work: "«О свободе» (1859)",
    quote:
      "Если бы всё человечество, кроме одного, держалось одного мнения, оно имело бы не больше права заставить молчать этого одного, чем он — всё человечество.",
    body: "Милль защищает свободу слова не потому, что меньшинство всегда право, а потому, что без столкновения мнений истина превращается в мёртвую догму. Он первым ясно сформулировал «принцип вреда»: моя свобода кончается там, где начинается ущерб другому. Всё остальное — моё дело.",
    tag: "Свобода слова",
  },
  {
    name: "Николай Бердяев",
    years: "1874 — 1948",
    work: "«Философия свободы» (1911)",
    quote:
      "Свобода первичнее бытия. Это значит, что её нельзя ничем оправдать — она сама себя оправдывает.",
    body: "У Бердяева свобода — не политическая категория, а метафизическая. Она безосновна, она не выводится из природы или общества. Личность стоит выше государства, нации и даже истории. И именно поэтому она несёт абсолютную ответственность — переложить её не на кого.",
    tag: "Дух и личность",
  },
  {
    name: "Ханна Арендт",
    years: "1906 — 1975",
    work: "«Истоки тоталитаризма» (1951)",
    quote:
      "Идеальный подданный тоталитарного государства — не убеждённый нацист или коммунист, а человек, для которого больше не существует различия между фактом и вымыслом.",
    body: "Арендт показала, как тоталитаризм работает через разрушение здравого смысла и общей реальности. Когда всё может оказаться правдой и всё — ложью, человек теряет способность судить. И тогда он готов следовать за любым, кто предложит простую картину мира. Свобода требует общей фактической почвы.",
    tag: "Политическая мысль",
  },
  {
    name: "Фридрих Хайек",
    years: "1899 — 1992",
    work: "«Дорога к рабству» (1944)",
    quote:
      "Свобода предоставляет шансы — она не гарантирует результатов.",
    body: "Хайек настаивает: знание рассеяно. Никакой центр — ни государство, ни корпорация, ни алгоритм — не может знать достаточно, чтобы решать за миллионы людей. Свобода ценна не как идеал, а как механизм: только она позволяет обществу использовать знания, которыми никто не обладает целиком.",
    tag: "Либертарианство",
  },
];

function ThinkersPage() {
  return (
    <div>
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
          <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-ember">
            # архив / источники
          </div>
          <h1 className="mt-6 font-mono text-5xl font-bold leading-[1] text-foreground md:text-7xl">
            Мыслители <span className="ember-text">свободы</span>
          </h1>
          <p className="mt-8 max-w-2xl font-sans text-base leading-relaxed text-foreground/80 md:text-lg">
            Шесть голосов, без которых разговор о свободе превращается в
            пересказ заголовков. Никто из них не сказал последнего слова — и
            именно поэтому их стоит читать.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-20">
          <SectionLabel index="dir">/thinkers</SectionLabel>

          <div className="mt-12 grid gap-px bg-border md:grid-cols-2">
            {thinkers.map((t, i) => (
              <article
                key={t.name}
                className="group flex flex-col gap-6 bg-background p-8 transition hover:bg-card md:p-12"
              >
                <header className="flex items-start justify-between gap-4">
                  <div>
                    <div className="font-mono text-[11px] uppercase tracking-widest text-ember">
                      № {String(i + 1).padStart(2, "0")} · {t.tag}
                    </div>
                    <h2 className="mt-4 font-mono text-3xl font-bold text-foreground">
                      {t.name}
                    </h2>
                    <div className="mt-1 font-mono text-xs text-muted-foreground">
                      {t.years}
                    </div>
                  </div>
                </header>

                <blockquote className="border-l-2 border-ember pl-5 font-sans text-lg italic leading-snug text-foreground/90">
                  «{t.quote}»
                </blockquote>

                <p className="font-sans text-sm leading-relaxed text-muted-foreground">
                  {t.body}
                </p>

                <footer className="mt-auto flex items-center justify-between border-t border-border/60 pt-5 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  <span>ключевая работа</span>
                  <span className="text-foreground">{t.work}</span>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
