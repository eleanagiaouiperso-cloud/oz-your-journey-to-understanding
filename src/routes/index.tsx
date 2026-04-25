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

const piliers = [
  { key: "connaitre", label: "Connaître", color: "var(--oz-blue)", desc: "Comprendre l'histoire, les ressorts et les visages de l'antisémitisme." },
  { key: "transmettre", label: "Transmettre", color: "var(--oz-green)", desc: "Porter une parole claire dans sa famille, ses cercles, son réseau." },
  { key: "secourir", label: "Secourir", color: "var(--oz-red)", desc: "Savoir réagir, protéger, accompagner ceux qui sont visés." },
  { key: "defendre", label: "Défendre", color: "var(--oz-yellow)", desc: "S'organiser collectivement et tenir bon dans la durée." },
];

function Index() {
  return (
    <Layout>
      {/* HERO */}
      <section className="oz-section pt-10">
        <div className="oz-container text-center">
          <h1 className="oz-logo text-[7rem] sm:text-[9rem] leading-none mb-6">OZ</h1>
          <p className="text-lg sm:text-xl text-[var(--oz-navy)] font-medium mb-2">
            Un parcours pour se préparer face à l'antisémitisme.
          </p>
          <p className="oz-hand text-xl text-muted-foreground mb-8">10 mois. 4 piliers. Une promo.</p>
          <Link to="/aleph" className="oz-btn w-full sm:w-auto">
            M'inscrire à la promo Aleph
          </Link>
        </div>
      </section>

      {/* QU'EST-CE QU'OZ */}
      <section className="oz-section">
        <div className="oz-container">
          <h2 className="text-2xl mb-5">Qu'est-ce qu'Oz ?</h2>
          <div className="space-y-4 text-[15px] leading-relaxed text-foreground/90">
            <p>
              Oz, c'est l'idée simple qu'on ne subit pas l'histoire — on s'y prépare. Un parcours
              concret, exigeant et fraternel, pour celles et ceux qui veulent être à la hauteur
              du moment.
            </p>
            <p>
              Pendant 10 mois, on apprend, on s'entraîne, on construit une communauté capable
              de connaître, transmettre, secourir et défendre.
            </p>
            <p>
              Pas de bavardage. Du temps long, des rencontres, des outils. Et au bout, une promo
              qui ne se quittera plus.
            </p>
          </div>
        </div>
      </section>

      {/* 4 PILIERS */}
      <section className="oz-section bg-white border-y border-border">
        <div className="oz-container">
          <h2 className="text-2xl mb-6">Les 4 piliers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {piliers.map((p) => (
              <div key={p.key} className="oz-card flex gap-4 items-start">
                <div
                  aria-hidden
                  className="w-12 h-12 shrink-0 rounded"
                  style={{ background: p.color }}
                />
                <div>
                  <h3 className="text-lg mb-1">{p.label}</h3>
                  <p className="text-sm text-foreground/80 leading-snug">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARCOURS */}
      <section className="oz-section">
        <div className="oz-container">
          <h2 className="text-2xl mb-4">Le parcours</h2>
          <p className="text-[15px] leading-relaxed">
            10 mois, 1 séance principale par mois + 1 dimanche <em>Secourir</em>, en présentiel
            à Paris. Un cadre régulier, une promo soudée, des intervenants engagés.
          </p>
        </div>
      </section>

      {/* PROMOS */}
      <section className="oz-section bg-white border-y border-border">
        <div className="oz-container">
          <h2 className="text-2xl mb-6">Les promos</h2>
          <div className="oz-card border-l-4" style={{ borderLeftColor: "var(--oz-navy)" }}>
            <div className="flex items-baseline justify-between mb-2">
              <h3 className="text-2xl">Aleph</h3>
              <span className="oz-hand text-base text-muted-foreground">Paris</span>
            </div>
            <p className="text-sm text-foreground/80 mb-4">Mai 2026 → Février 2027 · 50 places</p>
            <Link to="/aleph" className="oz-btn w-full">M'inscrire</Link>
          </div>
          <p className="oz-hand text-base text-muted-foreground mt-5 text-center">
            Bientôt : Oz EEIF · Oz Moadon · Oz Strasbourg
          </p>
        </div>
      </section>

      {/* VIDEOS */}
      <section className="oz-section">
        <div className="oz-container">
          <h2 className="text-2xl mb-6">Vidéos pour comprendre</h2>
          <div className="space-y-4">
            <div className="oz-card p-0 overflow-hidden">
              <div className="aspect-video bg-[var(--oz-navy)] flex items-center justify-center">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Présentation d'Oz"
                  allowFullScreen
                />
              </div>
              <div className="p-4">
                <h3 className="text-base mb-1">Présentation d'Oz</h3>
                <p className="text-sm text-muted-foreground">5 min — pourquoi ce parcours, maintenant.</p>
              </div>
            </div>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="oz-card block hover:border-[var(--oz-navy)] transition-colors"
            >
              <h3 className="text-base mb-1">Témoignages — Facebook</h3>
              <p className="text-sm text-muted-foreground">Ils en parlent : retours et premières voix.</p>
            </a>
          </div>
        </div>
      </section>

      {/* S'ENGAGER AUTREMENT */}
      <section className="oz-section bg-white border-y border-border">
        <div className="oz-container">
          <h2 className="text-2xl mb-6">S'engager autrement</h2>
          <div className="space-y-3">
            <Link to="/ambassadeur" className="oz-card block hover:border-[var(--oz-navy)] transition-colors">
              <h3 className="text-lg mb-1">Devenir Ambassadeur</h3>
              <p className="text-sm text-muted-foreground">Faire connaître Oz autour de toi.</p>
            </Link>
            <Link to="/createur" className="oz-card block hover:border-[var(--oz-navy)] transition-colors">
              <h3 className="text-lg mb-1">Créer un Oz</h3>
              <p className="text-sm text-muted-foreground">Lancer Oz dans ta ville ou ton réseau.</p>
            </Link>
            <Link to="/soiree" className="oz-card block hover:border-[var(--oz-navy)] transition-colors">
              <h3 className="text-lg mb-1">J'étais à la soirée</h3>
              <p className="text-sm text-muted-foreground">Reste en contact après le lancement.</p>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
