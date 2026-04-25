import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

export type ScreenName =
  | "accept"
  | "name"
  | "silhouette"
  | "oz"
  | "promo"
  | "welcome"
  | "parcours";

export type AppState = {
  screen: ScreenName;
  prenom: string;
  nom: string;
  silhouette: string | null;
  ozChapter: string | null;
  promo: string | null;
  inscriptions: Set<string>; // occurrence ids the user is inscribed to
  isAmbassadeur: boolean;
};

const STORAGE_KEY = "oz_state_v2";

type Ctx = {
  state: AppState;
  goto: (s: ScreenName) => void;
  set: <K extends keyof AppState>(key: K, value: AppState[K]) => void;
  toggleInscription: (id: string) => void;
  reset: () => void;
};

const initial: AppState = {
  screen: "accept",
  prenom: "",
  nom: "",
  silhouette: null,
  ozChapter: null,
  promo: null,
  inscriptions: new Set(),
  isAmbassadeur: false,
};

const AppCtx = createContext<Ctx | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AppState>(initial);
  const [hydrated, setHydrated] = useState(false);

  // Load from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        setState({
          ...initial,
          ...parsed,
          inscriptions: new Set(parsed.inscriptions ?? []),
        });
      }
    } catch {
      // ignore
    }
    setHydrated(true);
  }, []);

  // Persist
  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          ...state,
          inscriptions: Array.from(state.inscriptions),
        })
      );
    } catch {
      // ignore
    }
  }, [state, hydrated]);

  const ctx: Ctx = {
    state,
    goto: (s) => setState((p) => ({ ...p, screen: s })),
    set: (key, value) => setState((p) => ({ ...p, [key]: value })),
    toggleInscription: (id) =>
      setState((p) => {
        const next = new Set(p.inscriptions);
        if (next.has(id)) next.delete(id);
        else next.add(id);
        return { ...p, inscriptions: next };
      }),
    reset: () => {
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch {
        // ignore
      }
      setState(initial);
    },
  };

  return <AppCtx.Provider value={ctx}>{children}</AppCtx.Provider>;
}

export function useApp() {
  const c = useContext(AppCtx);
  if (!c) throw new Error("useApp must be inside AppProvider");
  return c;
}
