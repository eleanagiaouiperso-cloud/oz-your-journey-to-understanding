import { useApp } from "@/lib/oz/AppContext";
import { SILHOUETTES } from "@/lib/oz/silhouettes";

export function SilhouetteScreen() {
  const { state, set, goto } = useApp();
  return (
    <section className="screen form active">
      <div>
        <h1 className="form-title">Choisis ta<br />silhouette</h1>
        <p className="form-subtitle">
          C'est ta représentation dans Oz. Elle apparaît sur ton profil, t'accompagne à chaque RDV, et se construit brique après brique. Tu pourras la changer à tout moment.
        </p>
        <div className="silhouette-grid">
          {SILHOUETTES.map((s) => {
            const Render = s.render;
            return (
              <button
                key={s.id}
                type="button"
                className={`silhouette-card${state.silhouette === s.id ? " selected" : ""}`}
                onClick={() => set("silhouette", s.id)}
              >
                <Render />
              </button>
            );
          })}
        </div>
      </div>
      <button
        className="btn-primary"
        disabled={!state.silhouette}
        onClick={() => goto("oz")}
      >
        Continuer →
      </button>
    </section>
  );
}
