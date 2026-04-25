import { createFileRoute } from "@tanstack/react-router";
import { AppProvider, useApp } from "@/lib/oz/AppContext";
import { AcceptScreen } from "@/components/oz/screens/AcceptScreen";
import { NameScreen } from "@/components/oz/screens/NameScreen";
import { SilhouetteScreen } from "@/components/oz/screens/SilhouetteScreen";
import { OzScreen } from "@/components/oz/screens/OzScreen";
import { PromoScreen } from "@/components/oz/screens/PromoScreen";
import { WelcomeScreen } from "@/components/oz/screens/WelcomeScreen";
import { ParcoursScreen } from "@/components/oz/parcours/ParcoursScreen";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Oz — Être prêt" },
      { name: "description", content: "Oz — un parcours d'engagement de 10 mois pour se préparer face à l'antisémitisme. Promo Aleph, mai 2026 à Paris." },
      { property: "og:title", content: "Oz — Être prêt" },
      { property: "og:description", content: "Un parcours d'engagement de 10 mois autour de 4 piliers : Connaître, Transmettre, Secourir, Défendre." },
    ],
  }),
  component: HomePage,
});

function ScreenRouter() {
  const { state, reset } = useApp();
  return (
    <>
      <div className="version-tag">V2 · MULTI-PROMO</div>
      {state.screen === "accept" && <AcceptScreen />}
      {state.screen === "name" && <NameScreen />}
      {state.screen === "silhouette" && <SilhouetteScreen />}
      {state.screen === "oz" && <OzScreen />}
      {state.screen === "promo" && <PromoScreen />}
      {state.screen === "welcome" && <WelcomeScreen />}
      {state.screen === "parcours" && <ParcoursScreen />}

      <button
        type="button"
        className="dev-banner"
        onClick={() => {
          if (confirm("Réinitialiser la démo ?")) reset();
        }}
      >
        ⟲ Reset démo
      </button>
    </>
  );
}

function HomePage() {
  return (
    <AppProvider>
      <ScreenRouter />
    </AppProvider>
  );
}
