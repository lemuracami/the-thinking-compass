export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border/60 bg-coal">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-6 py-16 md:grid-cols-4 md:px-10">
        <div className="md:col-span-2">
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-ember">
            // libertas.exe
          </div>
          <p className="mt-4 max-w-md font-sans text-sm leading-relaxed text-muted-foreground">
            Самиздат о свободе мышления в эпоху алгоритмических лент. Без
            рекламы, без аналитики, без рекомендованного. Только текст и
            читатель.
          </p>
        </div>

        <div>
          <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            Источники
          </div>
          <ul className="mt-4 space-y-2 font-mono text-xs text-foreground/80">
            <li>Кант — «Что такое просвещение?»</li>
            <li>Гегель — «Феноменология духа»</li>
            <li>Бердяев — «Философия свободы»</li>
            <li>Оруэлл — «1984»</li>
            <li>Хайек, Милль, Арендт</li>
          </ul>
        </div>

        <div>
          <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            Принцип
          </div>
          <p className="mt-4 font-mono text-xs leading-relaxed text-foreground/80">
            Свобода — это в первую очередь ответственность. Сначала за
            собственные мысли. Потом за всё остальное.
          </p>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground md:px-10">
          <span>{new Date().getFullYear()} — без копирайта</span>
          <span>думай.сам</span>
        </div>
      </div>
    </footer>
  );
}
