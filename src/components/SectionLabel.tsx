export function SectionLabel({
  index,
  children,
}: {
  index: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-ember">
      <span className="bg-ember px-1.5 py-0.5 text-primary-foreground">
        {index}
      </span>
      <span>{children}</span>
      <span className="h-px flex-1 bg-border" />
    </div>
  );
}
