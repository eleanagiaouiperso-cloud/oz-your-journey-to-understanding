import { useApp } from "@/lib/oz/AppContext";

export function WelcomeScreen() {
  const { state, goto } = useApp();
  return (
    <section id="screen-welcome" className="screen active">
      <div className="welcome-hello">Bienvenue,</div>
      <div className="welcome-name">{state.prenom || "—"}</div>
      <div className="welcome-status">
        Tu es maintenant
        <strong>OZIEN·NE</strong>
      </div>
      <div className="welcome-tagline">Être prêt.</div>
      <button
        className="btn-primary welcome-continue"
        onClick={() => goto("parcours")}
      >
        Découvrir mon parcours →
      </button>
    </section>
  );
}
