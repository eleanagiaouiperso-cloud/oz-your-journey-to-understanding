import { useState } from "react";
import { useApp } from "@/lib/oz/AppContext";
import { OzienTab } from "./OzienTab";
import { AmbassadeurTab } from "./AmbassadeurTab";
import { CreateurTab } from "./CreateurTab";

type Tab = "ozien" | "ambassadeur" | "createur";

export function ParcoursScreen() {
  const { state } = useApp();
  const [tab, setTab] = useState<Tab>("ozien");

  return (
    <section id="screen-parcours" className="screen active">
      {/* Header */}
      <header className="parcours-header">
        <div className="parcours-header-top">
          <span className="logo-oz sm" aria-label="OZ" />
          <div className="parcours-user">
            <div className="parcours-user-name">
              {(state.prenom || "—")} {(state.nom || "—")}
            </div>
            <div className="parcours-user-promo">Promo Aleph</div>
          </div>
        </div>
        <div className="parcours-chapter-bar">
          <span className="chapter-chip">
            <span className="dot" />
            OZ PARIS
          </span>
          <span className="chapter-chip">OZIEN·NE</span>
        </div>
      </header>

      {/* Tab content */}
      {tab === "ozien" && (
        <OzienTab
          onOpenAmbassadeur={() => setTab("ambassadeur")}
          onOpenCreateur={() => setTab("createur")}
        />
      )}
      {tab === "ambassadeur" && <AmbassadeurTab />}
      {tab === "createur" && <CreateurTab />}

      {/* Bottom nav */}
      <nav className="bottom-nav">
        <button
          className={`nav-tab${tab === "ozien" ? " active" : ""}`}
          onClick={() => setTab("ozien")}
          type="button"
        >
          <svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" /><path d="M4 22 Q4 14 12 14 Q20 14 20 22 Z" /></svg>
          Ozien
        </button>
        <button
          className={`nav-tab${tab === "ambassadeur" ? " active" : ""}`}
          onClick={() => setTab("ambassadeur")}
          type="button"
        >
          <svg viewBox="0 0 24 24"><path d="M2 4h20l-3 8 3 8H2z" /></svg>
          Ambassadeur
        </button>
        <button
          className={`nav-tab${tab === "createur" ? " active" : ""}`}
          onClick={() => setTab("createur")}
          type="button"
        >
          <svg viewBox="0 0 24 24"><path d="M12 2 L22 9 L18 22 L6 22 L2 9 Z" /></svg>
          Créateur
        </button>
      </nav>
    </section>
  );
}
