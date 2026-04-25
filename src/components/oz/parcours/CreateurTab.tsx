export function CreateurTab() {
  return (
    <div className="tab-content active">
      <div className="createur-hero">
        <div className="createur-hero-eyebrow">Plateforme ouverte</div>
        <h2 className="createur-hero-title">Lance<br />ton Oz</h2>
        <div className="createur-hero-sub">
          Ville, école, association, entreprise — fais venir Oz chez toi.
        </div>
      </div>
      <div className="createur-wrap">
        <div className="createur-intro">
          <p>
            Oz n'est pas réservé à Paris. On t'ouvre tout le parcours — le kit pédagogique, les intervenants, les partenaires (SPCJ, MADA), la plateforme de gestion — pour que tu puisses déployer ton chapitre local (Oz Lyon, Oz Marseille, Oz EEIF…).
          </p>
        </div>

        <h3 className="createur-h3">Pour qui ?</h3>
        <div className="createur-grid">
          <div className="createur-card">
            <div className="createur-card-icon">🏛️</div>
            <div className="createur-card-title">Institutions</div>
            <div className="createur-card-desc">Communautés, synagogues, fédérations</div>
          </div>
          <div className="createur-card">
            <div className="createur-card-icon">🎓</div>
            <div className="createur-card-title">Écoles & universités</div>
            <div className="createur-card-desc">Campus, BDE, aumôneries</div>
          </div>
          <div className="createur-card">
            <div className="createur-card-icon">🏢</div>
            <div className="createur-card-title">Entreprises</div>
            <div className="createur-card-desc">Collaborateurs, clients, partenaires</div>
          </div>
          <div className="createur-card">
            <div className="createur-card-icon">🌍</div>
            <div className="createur-card-title">Autres villes</div>
            <div className="createur-card-desc">Lyon, Marseille, Strasbourg, Bruxelles…</div>
          </div>
        </div>

        <h3 className="createur-h3">Ce qu'on te fournit</h3>
        <ul className="createur-list">
          <li>Le programme complet (10 mois, lundis DC + mardis DT + dimanches Secourir)</li>
          <li>Le kit pédagogique (slides, fiches, cas pratiques, vidéos)</li>
          <li>Le réseau d'intervenants (SPCJ, MADA, experts)</li>
          <li>Les Legos physiques (25 briques par Ozien·ne)</li>
          <li>La plateforme — gestion des promos, inscriptions, check-in, suivi</li>
          <li>L'accompagnement de l'équipe Moadon</li>
        </ul>

        <h3 className="createur-h3">Comment ça marche</h3>
        <ol className="createur-steps">
          <li><strong>Tu candidates</strong> — 30 min d'échange pour comprendre ton contexte</li>
          <li><strong>On valide ensemble</strong> — cadre, dates, intervenants, comm</li>
          <li><strong>Tu recrutes ta promo</strong> — 20 à 50 Ozien·ne·s idéalement</li>
          <li><strong>Tu lances</strong> — on t'accompagne sur le 1er RDV</li>
        </ol>

        <div className="createur-cta">
          <button
            className="btn-primary"
            type="button"
            onClick={() => alert("Formulaire de candidature à venir.")}
          >
            Je candidate pour créer mon Oz →
          </button>
        </div>
      </div>
    </div>
  );
}
