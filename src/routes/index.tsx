import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/oz/Layout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Oz — Un parcours pour se préparer face à l'antisémitisme" },
      {
        name: "description",
        content:
          "Oz est un parcours d'engagement de 10 mois autour de 4 piliers : Connaître, Transmettre, Secourir, Défendre. Promo Aleph — Paris, mai 2026.",
      },
      { property: "og:title", content: "Oz — Se préparer face à l'antisémitisme" },
      {
        property: "og:description",
        content: "Un parcours d'engagement de 10 mois. Promo Aleph — Paris, mai 2026.",
      },
    ],
  }),
  component: Index,
});

// 🚨 À REMPLACER par l'URL HelloAsso publique réelle
const HELLOASSO_URL = "https://www.helloasso.com/associations/moadon/evenements/oz-aleph";

const piliers = [
  {
    key: "connaitre",
    label: "Connaître",
    color: "var(--pilier-connaitre)",
    initial: "C",
    desc: "Comprendre l'histoire, les ressorts et les visages de l'antisémitisme.",
  },
  {
    key: "transmettre",
    label: "Transmettre",
    color: "var(--pilier-transmettre)",
    initial: "T",
    desc: "Porter une parole claire dans sa famille, ses cercles, son réseau.",
  },
  {
    key: "secourir",
    label: "Secourir",
    color: "var(--pilier-secourir)",
    initial: "S",
    desc: "Savoir réagir, protéger, accompagner ceux qui sont visés.",
  },
  {
    key: "defendre",
    label: "Défendre",
    color: "var(--pilier-defendre)",
    initial: "D",
    desc: "S'organiser collectivement et tenir bon dans la durée.",
  },
];

function Index() {
  return (
    <Layout>
      {/* ============ HERO ============ */}
      <section
        style={{
          background: "radial-gradient(ellipse at center, var(--oz-bordeaux) 0%, var(--oz-ink) 100%)",
          color: "#fff",
          padding: "56px 22px 64px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: -80,
            right: -80,
            width: 240,
            height: 240,
            border: "3px solid rgba(232,73,11,.15)",
            borderRadius: "50%",
          }}
        />
        <div className="oz-eyebrow" style={{ color: "var(--oz-orange)", marginBottom: 18 }}>
          Promo Aleph · Paris · Mai 2026
        </div>
        <div
          className="oz-logo"
          style={{
            fontSize: 140,
            color: "var(--oz-orange)",
            filter: "drop-shadow(0 0 40px rgba(232,73,11,.35))",
            marginBottom: 18,
          }}
        >
          OZ!
        </div>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 300,
            fontSize: 24,
            lineHeight: 1.2,
            color: "#fff",
            textTransform: "none",
            letterSpacing: 0,
            margin: "0 auto 12px",
            maxWidth: 340,
          }}
        >
          Un parcours pour se préparer face à <strong style={{ fontWeight: 800, color: "var(--oz-orange)" }}>l'antisémitisme.</strong>
        </h1>
        <p
          className="oz-hand"
          style={{ fontSize: 26, color: "var(--oz-orange)", marginTop: 14, transform: "rotate(-2deg)", display: "inline-block" }}
        >
          10 mois. 4 piliers. Une promo.
        </p>

        <div style={{ marginTop: 36, display: "grid", gap: 12 }}>
          <a href={HELLOASSO_URL} target="_blank" rel="noopener noreferrer" className="oz-btn oz-btn--orange">
            M'inscrire à la promo Aleph →
          </a>
          <a href="#parcours" className="oz-btn oz-btn--outline" style={{ borderColor: "var(--oz-orange)", color: "var(--oz-orange)" }}>
            Découvrir le parcours
          </a>
        </div>
      </section>

      {/* ============ QU'EST-CE QU'OZ ============ */}
      <section className="oz-section">
        <div className="oz-container">
          <div className="oz-eyebrow" style={{ marginBottom: 8 }}>Le projet</div>
          <h2 className="oz-h-section">Qu'est-ce qu'Oz&nbsp;?</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 14, fontSize: 15.5, lineHeight: 1.55 }}>
            <p>
              Oz, c'est l'idée simple qu'<strong>on ne subit pas l'histoire — on s'y prépare</strong>. Un parcours
              concret, exigeant et fraternel, pour celles et ceux qui veulent être à la hauteur du moment.
            </p>
            <p>
              Pendant 10 mois, on apprend, on s'entraîne, on construit une communauté capable de connaître,
              transmettre, secourir et défendre.
            </p>
            <p style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 18, color: "var(--oz-bordeaux)", textTransform: "uppercase", lineHeight: 1.15 }}>
              Pas de bavardage. Du temps long, des rencontres, des outils.
            </p>
            <p
              className="oz-hand"
              style={{ fontSize: 22, color: "var(--oz-orange)", transform: "rotate(-1.5deg)", display: "inline-block" }}
            >
              Et au bout, une promo qui ne se quittera plus.
            </p>
          </div>
        </div>
      </section>

      {/* ============ 4 PILIERS ============ */}
      <section
        className="oz-section"
        style={{ background: "#fff", borderTop: "2px solid var(--oz-bordeaux)", borderBottom: "2px solid var(--oz-bordeaux)" }}
      >
        <div className="oz-container">
          <div className="oz-eyebrow" style={{ marginBottom: 8 }}>La structure</div>
          <h2 className="oz-h-section">Les 4 piliers</h2>

          <div style={{ display: "grid", gap: 14 }}>
            {piliers.map((p) => (
              <div
                key={p.key}
                className="oz-card"
                style={{ display: "flex", gap: 16, alignItems: "stretch", padding: 0, overflow: "hidden" }}
              >
                <div className="oz-pilier-square" style={{ background: p.color, width: 72, height: "auto", fontSize: 40 }}>
                  {p.initial}
                </div>
                <div style={{ padding: "14px 16px 14px 0", flex: 1 }}>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 900,
                      fontSize: 22,
                      textTransform: "uppercase",
                      color: "var(--oz-bordeaux)",
                      marginBottom: 4,
                      lineHeight: 1,
                    }}
                  >
                    {p.label}
                  </h3>
                  <p style={{ fontSize: 14, lineHeight: 1.45, color: "var(--oz-ink)" }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PARCOURS ============ */}
      <section className="oz-section" id="parcours">
        <div className="oz-container">
          <div className="oz-eyebrow" style={{ marginBottom: 8 }}>Le format</div>
          <h2 className="oz-h-section">Le parcours</h2>

          <div className="oz-card" style={{ background: "var(--oz-orange-pale)", borderColor: "var(--oz-orange)" }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 8 }}>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 900,
                  fontSize: 56,
                  color: "var(--oz-orange)",
                  lineHeight: 0.85,
                }}
              >
                10
              </span>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  fontSize: 18,
                  color: "var(--oz-bordeaux)",
                }}
              >
                mois en présentiel
              </span>
            </div>
            <p style={{ fontSize: 15, lineHeight: 1.55 }}>
              1 séance principale par mois <span style={{ color: "var(--oz-bordeaux-2)" }}>+</span> 1 dimanche{" "}
              <em>Secourir</em>, à Paris. Un cadre régulier, une promo soudée, des intervenants engagés.
            </p>
            <p
              className="oz-hand"
              style={{ marginTop: 12, fontSize: 18, color: "var(--oz-orange)", transform: "rotate(-1deg)", display: "inline-block" }}
            >
              On commence ensemble, on finit ensemble.
            </p>
          </div>
        </div>
      </section>

      {/* ============ PROMOS ============ */}
      <section
        className="oz-section"
        style={{ background: "#fff", borderTop: "2px solid var(--oz-bordeaux)", borderBottom: "2px solid var(--oz-bordeaux)" }}
      >
        <div className="oz-container">
          <div className="oz-eyebrow" style={{ marginBottom: 8 }}>Les chapitres</div>
          <h2 className="oz-h-section">Les promos</h2>

          {/* Aleph (open) */}
          <div className="oz-card--accent" style={{ marginBottom: 12 }}>
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 8 }}>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 900,
                  fontSize: 32,
                  color: "var(--oz-bordeaux)",
                  textTransform: "uppercase",
                  lineHeight: 1,
                  letterSpacing: "0.02em",
                }}
              >
                Aleph
              </h3>
              <span className="oz-tag">Inscriptions ouvertes</span>
            </div>
            <p
              className="oz-hand"
              style={{ fontSize: 16, color: "var(--oz-orange)", marginTop: 4 }}
            >
              Paris · Mai 2026 → Février 2027
            </p>
            <p style={{ fontSize: 13.5, color: "var(--oz-bordeaux-2)", marginTop: 6, marginBottom: 14 }}>
              50 places · 10 séances mensuelles + 1 dimanche Secourir
            </p>
            <a href={HELLOASSO_URL} target="_blank" rel="noopener noreferrer" className="oz-btn">
              M'inscrire →
            </a>
          </div>

          {/* À venir */}
          {[
            { name: "Beth", meta: "EEIF · Bientôt" },
            { name: "Gimel", meta: "Moadon · Bientôt" },
            { name: "Daleth", meta: "Strasbourg · Bientôt" },
          ].map((p) => (
            <div
              key={p.name}
              className="oz-card--accent"
              style={{ borderLeftColor: "var(--oz-grey-mid)", opacity: 0.75, marginBottom: 8, background: "var(--oz-grey-light)" }}
            >
              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 8 }}>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 900,
                    fontSize: 26,
                    color: "var(--oz-bordeaux-2)",
                    textTransform: "uppercase",
                    lineHeight: 1,
                  }}
                >
                  {p.name}
                </h3>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--oz-bordeaux-2)" }}>
                  À venir
                </span>
              </div>
              <p style={{ fontSize: 13, color: "var(--oz-bordeaux-2)", marginTop: 4 }}>{p.meta}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ VIDÉOS ============ */}
      <section className="oz-section">
        <div className="oz-container">
          <div className="oz-eyebrow" style={{ marginBottom: 8 }}>Comprendre</div>
          <h2 className="oz-h-section">Vidéos</h2>

          <div style={{ display: "grid", gap: 14 }}>
            <div className="oz-card" style={{ padding: 0, overflow: "hidden" }}>
              <div style={{ aspectRatio: "16/9", background: "var(--oz-bordeaux)" }}>
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Présentation d'Oz"
                  allowFullScreen
                />
              </div>
              <div style={{ padding: 14 }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 18, color: "var(--oz-bordeaux)", textTransform: "uppercase", marginBottom: 4 }}>
                  Présentation d'Oz
                </h3>
                <p style={{ fontSize: 13.5, color: "var(--oz-bordeaux-2)" }}>5 min — pourquoi ce parcours, maintenant.</p>
              </div>
            </div>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="oz-card"
              style={{ display: "block", textDecoration: "none" }}
            >
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 18, color: "var(--oz-bordeaux)", textTransform: "uppercase", marginBottom: 4 }}>
                Témoignages — Facebook
              </h3>
              <p style={{ fontSize: 13.5, color: "var(--oz-bordeaux-2)" }}>Ils en parlent : retours et premières voix.</p>
            </a>
          </div>
        </div>
      </section>

      {/* ============ S'ENGAGER AUTREMENT ============ */}
      <section
        className="oz-section"
        style={{ background: "var(--oz-bordeaux)", color: "#fff" }}
      >
        <div className="oz-container">
          <div className="oz-eyebrow" style={{ color: "var(--oz-orange)", marginBottom: 8 }}>Autres voies</div>
          <h2
            className="oz-h-section"
            style={{ color: "#fff" }}
          >
            S'engager autrement
          </h2>

          <div style={{ display: "grid", gap: 12 }}>
            {[
              { to: "/ambassadeur" as const, title: "Devenir Ambassadeur", desc: "Faire connaître Oz dans ton réseau." },
              { to: "/createur" as const, title: "Créer un Oz", desc: "Lancer Oz dans ta ville ou ton mouvement." },
              { to: "/soiree" as const, title: "J'étais à la soirée", desc: "Reste en contact après le 27 avril." },
            ].map((c) => (
              <Link
                key={c.to}
                to={c.to}
                style={{
                  display: "block",
                  background: "rgba(255,255,255,.05)",
                  borderLeft: "4px solid var(--oz-orange)",
                  padding: "16px 18px",
                  textDecoration: "none",
                  color: "#fff",
                }}
              >
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 20, textTransform: "uppercase", color: "#fff", marginBottom: 4 }}>
                  {c.title} →
                </h3>
                <p style={{ fontSize: 13.5, color: "var(--oz-orange-soft)" }}>{c.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
