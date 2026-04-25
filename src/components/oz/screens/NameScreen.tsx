import { useApp } from "@/lib/oz/AppContext";

export function NameScreen() {
  const { state, set, goto } = useApp();
  const valid = state.prenom.trim().length > 0 && state.nom.trim().length > 0;

  return (
    <section className="screen form active">
      <div>
        <h1 className="form-title">Avant de<br />commencer</h1>
        <p className="form-subtitle">
          Dis-nous qui tu es. C'est comme ça qu'on t'identifiera dans le parcours.
        </p>
        <div className="input-group">
          <label htmlFor="prenom">Prénom</label>
          <input
            id="prenom"
            type="text"
            autoComplete="given-name"
            value={state.prenom}
            onChange={(e) => set("prenom", e.target.value)}
            maxLength={50}
          />
        </div>
        <div className="input-group">
          <label htmlFor="nom">Nom</label>
          <input
            id="nom"
            type="text"
            autoComplete="family-name"
            value={state.nom}
            onChange={(e) => set("nom", e.target.value)}
            maxLength={50}
          />
        </div>
      </div>
      <button
        className="btn-primary"
        disabled={!valid}
        onClick={() => goto("silhouette")}
      >
        Continuer →
      </button>
    </section>
  );
}
