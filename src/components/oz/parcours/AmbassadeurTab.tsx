import { useState } from "react";
import { useApp } from "@/lib/oz/AppContext";
import { AMBASSADEUR_MESSAGE } from "@/lib/oz/data";

export function AmbassadeurTab() {
  const { state, set } = useApp();
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(AMBASSADEUR_MESSAGE);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="tab-content active">
      <div className="amb-hero">
        <h2 className="amb-hero-title">Deviens<br />Ambassadeur Oz</h2>
        <div className="amb-hero-sub">Parle de Oz autour de toi</div>
      </div>
      <div className="amb-wrap">
        <div className={`amb-status${state.isAmbassadeur ? " activated" : ""}`}>
          {state.isAmbassadeur
            ? "Tu es ambassadeur·rice Oz. Merci de porter le projet 🧡"
            : "Tu n'es pas encore ambassadeur. Tu peux le devenir dès maintenant — et faire venir autour de toi les personnes à qui Oz est destiné."}
        </div>

        <div className="amb-role">
          <h3>Le rôle</h3>
          <p style={{ fontSize: 14 }}>
            Parler de Oz autour de toi, avec pour objectif de faire venir 5 à 7 personnes aux événements Oz.
          </p>
          <h3>Tu y gagnes</h3>
          <ul>
            <li>Un engagement qui a du sens pour ton entourage</li>
            <li>Faire partie des premiers ambassadeurs</li>
            <li>Accès gratuit à Oz à vie</li>
          </ul>
          <h3>Ce qui t'attend</h3>
          <ul>
            <li>~30 minutes par semaine avant un événement</li>
            <li>Un message WhatsApp pré-rédigé à envoyer à tes contacts</li>
            <li>Un suivi léger avec l'équipe Oz</li>
          </ul>
        </div>

        <h3 className="createur-h3" style={{ marginTop: 8 }}>Le message WhatsApp prêt à envoyer</h3>
        <div className="amb-msg-template">{AMBASSADEUR_MESSAGE}</div>

        <div className="amb-actions">
          <button className="btn-secondary" type="button" onClick={copy}>
            {copied ? "✓ Message copié" : "Copier le message"}
          </button>
          {!state.isAmbassadeur && (
            <button className="btn-primary" type="button" onClick={() => set("isAmbassadeur", true)}>
              Je deviens ambassadeur
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
