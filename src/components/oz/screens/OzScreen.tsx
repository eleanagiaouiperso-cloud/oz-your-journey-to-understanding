import { useApp } from "@/lib/oz/AppContext";
import { OZ_CHAPTERS } from "@/lib/oz/data";

export function OzScreen() {
  const { state, set, goto } = useApp();
  return (
    <section className="screen form active">
      <div>
        <h1 className="form-title">Quel Oz<br />veux-tu rejoindre ?</h1>
        <p className="form-subtitle">
          Oz se déploie par chapitre local. Chaque chapitre a ses promos, ses lieux, ses intervenants. Aujourd'hui, Oz Paris est ouvert. Les autres arrivent.
        </p>
        <div className="oz-list">
          {OZ_CHAPTERS.map((c) => (
            <button
              key={c.id}
              type="button"
              className={`oz-card${c.locked ? " locked" : ""}${state.ozChapter === c.id ? " selected" : ""}`}
              onClick={() => !c.locked && set("ozChapter", c.id)}
              disabled={c.locked}
            >
              <div className="oz-card-main">
                <div className="oz-card-name">{c.name}</div>
                <div className="oz-card-meta">{c.meta}</div>
              </div>
              <div className="oz-card-icon">{c.locked ? "🔒" : "→"}</div>
            </button>
          ))}
        </div>
        <p className="form-subtitle" style={{ fontSize: 13, fontStyle: "italic" }}>
          Tu représentes un autre lieu et tu veux lancer ton Oz ? Va dans l'onglet Créateur une fois inscrit.
        </p>
      </div>
      <button
        className="btn-primary"
        disabled={!state.ozChapter}
        onClick={() => goto("promo")}
      >
        Continuer →
      </button>
    </section>
  );
}
