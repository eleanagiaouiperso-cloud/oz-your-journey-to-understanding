import { Link } from "@tanstack/react-router";

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-[var(--oz-bordeaux)] text-white">
      <div className="oz-container flex items-center justify-between" style={{ height: 56 }}>
        <Link to="/" aria-label="Oz — accueil" className="oz-logo" style={{ fontSize: 32, color: "var(--oz-orange)" }}>
          OZ!
        </Link>
        <span
          className="oz-hand"
          style={{ fontSize: 16, color: "var(--oz-orange-soft)", transform: "rotate(-2deg)" }}
        >
          être prêt.
        </span>
      </div>
    </header>
  );
}
