export function Footer() {
  return (
    <footer className="mt-16 border-t border-border bg-[var(--oz-cream)]">
      <div className="oz-container py-8 text-sm text-muted-foreground">
        <p>© 2026 Oz — un projet de Moadon</p>
        <div className="mt-3 flex gap-4">
          <a href="#" className="hover:text-[var(--oz-navy)]">Mentions légales</a>
          <a href="#" className="hover:text-[var(--oz-navy)]">Confidentialité</a>
        </div>
      </div>
    </footer>
  );
}
