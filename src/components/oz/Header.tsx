import { Link } from "@tanstack/react-router";

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-[var(--oz-cream)]/90 backdrop-blur border-b border-border">
      <div className="oz-container flex items-center justify-between h-14">
        <Link to="/" aria-label="Oz — accueil" className="oz-logo text-3xl">
          OZ
        </Link>
        <a
          href="#"
          className="text-xs uppercase tracking-widest text-muted-foreground hover:text-[var(--oz-navy)] font-display"
          style={{ fontFamily: "var(--font-display)", letterSpacing: "0.12em" }}
        >
          Mon espace
        </a>
      </div>
    </header>
  );
}
