import { useState } from "react";
import { useApp } from "@/lib/oz/AppContext";
import { MOIS, PILIERS, type PilierKey, type Mois, type Occurrence } from "@/lib/oz/data";
import { SILHOUETTES } from "@/lib/oz/silhouettes";

const TOTAL_BRICKS = 25;

function bricksFromInscriptions(count: number): PilierKey[] {
  // Simple: rotate piliers
  const order: PilierKey[] = ["c", "d", "t", "s"];
  const arr: PilierKey[] = [];
  for (let i = 0; i < count; i++) arr.push(order[i % 4]);
  return arr;
}

function MoisCard({ mois, expanded, onToggle }: { mois: Mois; expanded: boolean; onToggle: () => void }) {
  const { state, toggleInscription } = useApp();
  const pilier = PILIERS[mois.pilier];

  const renderOcc = (o: Occurrence, type: "lundi" | "mardi" | "dimanche") => {
    const inscrit = state.inscriptions.has(o.id);
    const cls = `occ-card${inscrit ? " inscrit" : ""}${type === "dimanche" ? " dimanche" : ""}`;
    return (
      <div key={o.id} className={cls}>
        <div className="occ-info">
          <div className="occ-date">{o.date}</div>
          <div className="occ-meta">{o.meta}</div>
        </div>
        <button
          className={`occ-btn${inscrit ? " inscrit" : ""}`}
          onClick={() => toggleInscription(o.id)}
          type="button"
        >
          {inscrit ? "✓ Inscrit" : "S'inscrire"}
        </button>
      </div>
    );
  };

  return (
    <div className={`mois-card ${mois.pilier === "c" ? "dc" : mois.pilier === "t" ? "dt" : ""}${mois.next ? " next" : ""}${mois.done ? " done" : ""}${expanded ? " expanded" : ""}`}>
      <div className="mois-top">
        <span className="mois-n">Mois {mois.n}</span>
        <span className="mois-pillier-tag">
          <span className={`dot ${mois.pilier}`} />
          {pilier.name}
        </span>
      </div>
      <div className="mois-nom">{mois.nom}</div>
      <div className="mois-theme">{mois.theme}</div>
      <button type="button" className="mois-expand" onClick={onToggle}>
        <span>Voir les dates</span>
        <span className="mois-expand-arrow">→</span>
      </button>
      <div className="mois-occurrences">
        {mois.lundis && mois.lundis.length > 0 && (
          <>
            <div className="occ-section-title">Lundis (DC)</div>
            {mois.lundis.map((o) => renderOcc(o, "lundi"))}
          </>
        )}
        {mois.mardis && mois.mardis.length > 0 && (
          <>
            <div className="occ-section-title">Mardis (DT)</div>
            {mois.mardis.map((o) => renderOcc(o, "mardi"))}
          </>
        )}
        {mois.dimanches && mois.dimanches.length > 0 && (
          <>
            <div className="occ-section-title">Dimanches (Secourir)</div>
            {mois.dimanches.map((o) => renderOcc(o, "dimanche"))}
          </>
        )}
      </div>
    </div>
  );
}

export function OzienTab({ onOpenAmbassadeur, onOpenCreateur }: { onOpenAmbassadeur: () => void; onOpenCreateur: () => void }) {
  const { state } = useApp();
  const [expanded, setExpanded] = useState<number | null>(1);

  const earnedCount = state.inscriptions.size;
  const bricks = bricksFromInscriptions(earnedCount);

  // % per pilier
  const piliersOrder: PilierKey[] = ["d", "c", "t", "s"];
  const moisCountByPilier: Record<PilierKey, number> = { c: 0, d: 0, t: 0, s: 0 };
  MOIS.forEach((m) => { moisCountByPilier[m.pilier]++; });
  const earnedByPilier: Record<PilierKey, number> = { c: 0, d: 0, t: 0, s: 0 };
  bricks.forEach((p) => { earnedByPilier[p]++; });

  const pctTotal = Math.round((earnedCount / TOTAL_BRICKS) * 100);

  const Sil = SILHOUETTES.find((s) => s.id === state.silhouette)?.render ?? SILHOUETTES[0].render;

  return (
    <div className="tab-content active">
      {/* Hero */}
      <div className="ozien-hero">
        <div className="ozien-silhouette-box">
          <Sil />
          <div className="ozien-silhouette-label">Ton Ozien·ne</div>
        </div>
        <div className="ozien-bricks-box">
          <div className="ozien-grid">
            {Array.from({ length: TOTAL_BRICKS }).map((_, i) => {
              const p = bricks[i];
              return (
                <div
                  key={i}
                  className={`brick${p ? ` ${p} earned` : ""}`}
                />
              );
            })}
          </div>
          <div className="bricks-count">
            <span>{earnedCount}</span>/{TOTAL_BRICKS} briques
          </div>
        </div>
      </div>

      {/* Piliers progress */}
      <div className="piliers-progress">
        {piliersOrder.map((p) => {
          const total = moisCountByPilier[p] || 1;
          const pct = Math.round((earnedByPilier[p] / total) * 100);
          return (
            <div key={p} className="pilier-row">
              <span className={`pilier-chip ${p}`} />
              <span className="pilier-name">{PILIERS[p].name}</span>
              <div className="pilier-bar">
                <div className={`pilier-bar-fill ${p}`} style={{ width: `${Math.min(100, pct)}%` }} />
              </div>
              <span className="pilier-pct">{Math.min(100, pct)} %</span>
            </div>
          );
        })}
        <div className="pilier-row" style={{ gridTemplateColumns: "1fr" }}>
          <div style={{ textAlign: "center", fontFamily: "var(--font-hand)", color: "var(--orange)" }}>
            Avancement global : {pctTotal} %
          </div>
        </div>
      </div>

      {/* Months */}
      <h2 className="section-title">Tes 10 mois</h2>
      <p className="section-subtitle">
        Mois par mois, tu choisis ta date. Un lundi (DC) ou mardi (DT) + des dimanches Secourir en bonus.
      </p>
      <div className="mois-list">
        {MOIS.map((m) => (
          <MoisCard
            key={m.n}
            mois={m}
            expanded={expanded === m.n}
            onToggle={() => setExpanded(expanded === m.n ? null : m.n)}
          />
        ))}
      </div>

      {/* CTAs */}
      <div className="cta-section">
        <h2 className="cta-title">À toi de jouer</h2>
        <p className="cta-subtitle">Voilà comment tu fais vivre Oz.</p>
        <div className="cta-grid">
          <button type="button" className="cta-btn" onClick={onOpenAmbassadeur}>
            <span>J'en parle autour de moi</span>
            <span>→</span>
          </button>
          <button type="button" className="cta-btn" onClick={() => alert("Page de soutien à venir.")}>
            <span>Je soutiens Oz</span>
            <span>→</span>
          </button>
          <button type="button" className="cta-btn" onClick={onOpenCreateur}>
            <span>Je lance mon Oz</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
