import { createFileRoute } from "@tanstack/react-router";
import { SectionLabel } from "@/components/SectionLabel";

export const Route = createFileRoute("/practices")({
  head: () => ({
    meta: [
      { title: "Практики критического мышления — libertas.exe" },
      {
        name: "description",
        content:
          "Семь конкретных упражнений, чтобы вернуть себе способность думать самостоятельно.",
      },
      { property: "og:title", content: "Практики критического мышления — libertas.exe" },
      {
        property: "og:description",
        content:
          "Семь упражнений против информационного шума, готовых ответов и алгоритмических лент.",
      },
    ],
  }),
  component: PracticesPage,
});

const practices = [
  {
    n: "01",
    title: "Цифровой пост",
    body: "Один день в неделю без лент: ни TikTok, ни X, ни Reels. Не «вместо», а «вместо ничего». Сначала будет тревожно — это и есть симптом. Алгоритм был не услугой, а зависимостью.",
    time: "1 день / нед.",
  },
  {
    n: "02",
    title: "Метод трёх источников",
    body: "Прежде чем поверить новости — найдите её в трёх независимых источниках с разными интересами. Не «трёх СМИ из одной страны», а трёх настоящих позиций. Если вы не нашли — у вас нет новости, у вас есть слух.",
    time: "5 мин",
  },
  {
    n: "03",
    title: "Стальной аргумент противника",
    body: "Возьмите позицию, которую считаете неверной, и сформулируйте её самым сильным образом — так, как сделал бы её защитник. Если у вас не получилось — вы ещё не имеете права с ней спорить.",
    time: "15 мин",
  },
  {
    n: "04",
    title: "Чтение длинного",
    body: "30 минут в день — текст длиннее 5000 знаков. Не блог, не тред. Книга, эссе, исследование. Внимание — это мышца, и алгоритмы её атрофировали. Восстанавливать придётся вручную.",
    time: "30 мин / день",
  },
  {
    n: "05",
    title: "Журнал собственных ошибок",
    body: "Записывайте случаи, когда вы оказались не правы. Не в споре — а в фактах, прогнозах, оценках. Через год у вас будет нечто более ценное, чем мнение: представление о том, как часто оно ошибается.",
    time: "ежедневно",
  },
  {
    n: "06",
    title: "Молчание перед ответом",
    body: "Перед тем как ответить в споре — пауза 60 секунд. В соцсетях — 24 часа. Большинство «мнений» — это рефлексы. Свободное мышление начинается там, где между раздражителем и реакцией появляется зазор.",
    time: "60 сек",
  },
  {
    n: "07",
    title: "Ответственность за репост",
    body: "Прежде чем переслать — спросите себя: я бы поручился за это лично, своим именем, перед знакомым? Если нет — не пересылайте. Распространение лжи делает вас её соавтором.",
    time: "перед каждым",
  },
];

function PracticesPage() {
  return (
    <div>
      <section className="border-b border-border/60">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-20 md:grid-cols-12 md:px-10 md:py-28">
          <div className="md:col-span-7">
            <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-ember">
              # руководство пользователя / разум
            </div>
            <h1 className="mt-6 font-mono text-5xl font-bold leading-[1] text-foreground md:text-7xl">
              Практики <span className="ember-text">критики</span>
            </h1>
            <p className="mt-8 max-w-2xl font-sans text-base leading-relaxed text-foreground/80 md:text-lg">
              Критическое мышление — не интеллектуальное превосходство, а
              ежедневная гигиена. Семь упражнений ниже не сделают вас умнее.
              Они сделают вас труднее в обращении — для алгоритмов, для
              рекламы, для пропаганды. Это уже немало.
            </p>
          </div>
          <aside className="md:col-span-5">
            <div className="hard-shadow border border-border bg-card p-6 font-mono text-xs leading-relaxed text-foreground/85">
              <div className="text-[11px] uppercase tracking-widest text-muted-foreground">
                требования системы
              </div>
              <ul className="mt-5 space-y-2.5">
                <li><span className="text-ember">▸</span> терпение к неудобной мысли</li>
                <li><span className="text-ember">▸</span> готовность ошибаться публично</li>
                <li><span className="text-ember">▸</span> отказ от «я просто такой»</li>
                <li><span className="text-ember">▸</span> 20 минут в день минимум</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-20">
          <SectionLabel index="run">$ ./practice.sh</SectionLabel>

          <div className="mt-12 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
            {practices.map((p) => (
              <article
                key={p.n}
                className="group relative flex flex-col bg-background p-8 transition hover:bg-card md:p-10"
              >
                <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  <span className="text-ember">/{p.n}</span>
                  <span>{p.time}</span>
                </div>
                <h3 className="mt-8 font-mono text-2xl font-bold leading-tight text-foreground">
                  {p.title}
                </h3>
                <p className="mt-5 font-sans text-sm leading-relaxed text-muted-foreground">
                  {p.body}
                </p>
                <div className="mt-8 h-px w-8 bg-ember transition-all group-hover:w-full" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-coal">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center md:px-10">
          <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-ember">
            // напоминание
          </div>
          <p className="mt-8 font-mono text-2xl leading-snug text-foreground md:text-3xl">
            Ни одна из этих практик не работает{" "}
            <span className="ember-text">один раз</span>.<br />
            Все они работают{" "}
            <span className="ember-text">каждый день</span>.
          </p>
        </div>
      </section>
    </div>
  );
}
