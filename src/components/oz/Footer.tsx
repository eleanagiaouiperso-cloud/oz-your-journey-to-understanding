export function Footer() {
  return (
    <footer
      className="mt-12"
      style={{
        background: "var(--oz-bordeaux)",
        color: "#fff",
        padding: "32px 22px 28px",
      }}
    >
      <div className="oz-logo" style={{ fontSize: 36, color: "var(--oz-orange)" }}>OZ!</div>
      <p
        className="oz-hand"
        style={{ color: "var(--oz-orange-soft)", fontSize: 18, marginTop: 4, transform: "rotate(-1deg)", display: "inline-block" }}
      >
        Être prêt.
      </p>
      <div
        style={{
          marginTop: 22,
          paddingTop: 16,
          borderTop: "1px solid rgba(255,255,255,.15)",
          fontSize: 12,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          fontFamily: "var(--font-display)",
          fontWeight: 600,
          opacity: 0.85,
        }}
      >
        © 2026 Oz · un projet Moadon
      </div>
      <div style={{ marginTop: 8, display: "flex", gap: 14, fontSize: 12, opacity: 0.75 }}>
        <a href="#" className="hover:text-[var(--oz-orange)]">Mentions légales</a>
        <a href="#" className="hover:text-[var(--oz-orange)]">Confidentialité</a>
        <a href="#" className="hover:text-[var(--oz-orange)]">Contact</a>
      </div>
    </footer>
  );
}
