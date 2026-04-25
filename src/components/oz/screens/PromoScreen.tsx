import { useApp } from "@/lib/oz/AppContext";
import { PROMOS } from "@/lib/oz/data";

const HELLOASSO_URL = "https://www.helloasso.com/associations/moadon/adhesions/oz-aleph";

export function PromoScreen() {
  const { state, set, goto } = useApp();

  const handleSubmit = () => {
    if (!state.promo) return;
    if (state.promo === "aleph") {
      // Redirection HelloAsso pour le paiement
      window.open(HELLOASSO_URL, "_blank", "noopener,noreferrer");
      // En parallèle on simule l'inscription côté app pour la démo
      goto("welcome");
    } else {
      goto("welcome");
    }
  };

  return (
    <section className="screen form active">
      <div>
        <h1 className="form-title">Choisis ta<br />promo</h1>
        <p className="form-subtitle">
          Chaque promo dure 10 mois. Une fois inscrit·e, tu choisis chaque mois l'occurrence (lundi / mardi / dimanche) qui te convient. Les dates des promos ne se chevauchent pas — chaque Ozien·ne démarre à sa rentrée.
        </p>
        <div className="promo-list">
          {PROMOS.map((p) => {
            const pct = Math.round((p.places / p.placesMax) * 100);
            return (
              <button
                key={p.id}
                type="button"
                className={`promo-card${p.full ? " full" : ""}${state.promo === p.id ? " selected" : ""}`}
                onClick={() => !p.full && set("promo", p.id)}
                disabled={p.full}
                style={{ textAlign: "left" }}
              >
                <div className="promo-top">
                  <div>
                    <div className="promo-name">{p.name}</div>
                    <div className="promo-dates">{p.dates}</div>
                  </div>
                  <span className={`promo-tag${p.full ? " full" : ""}`}>{p.tag}</span>
                </div>
                <div className="promo-meta">{p.meta}</div>
                {p.id === "aleph" && (
                  <div className="promo-places">
                    <div className="promo-places-bar">
                      <div className="promo-places-bar-fill" style={{ width: `${pct}%` }} />
                    </div>
                    <span>{p.places}/{p.placesMax}</span>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>
      <button
        className="btn-primary"
        disabled={!state.promo}
        onClick={handleSubmit}
      >
        Je valide mon inscription →
      </button>
    </section>
  );
}
