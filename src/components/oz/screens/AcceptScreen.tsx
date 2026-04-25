import { useEffect, useRef, useState } from "react";
import { useApp } from "@/lib/oz/AppContext";

const HOLD_MS = 1500;
const CIRCUMFERENCE = 2 * Math.PI * 94;

export function AcceptScreen() {
  const { goto } = useApp();
  const [pressing, setPressing] = useState(false);
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number>(0);
  const doneRef = useRef(false);

  const stop = () => {
    setPressing(false);
    setProgress(0);
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = null;
  };

  const tick = (t: number) => {
    const elapsed = t - startRef.current;
    const p = Math.min(1, elapsed / HOLD_MS);
    setProgress(p);
    if (p >= 1) {
      if (!doneRef.current) {
        doneRef.current = true;
        goto("name");
      }
      return;
    }
    rafRef.current = requestAnimationFrame(tick);
  };

  const start = () => {
    if (doneRef.current) return;
    setPressing(true);
    startRef.current = performance.now();
    rafRef.current = requestAnimationFrame(tick);
  };

  useEffect(() => () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
  }, []);

  const dash = `${progress * CIRCUMFERENCE} ${CIRCUMFERENCE}`;

  return (
    <section id="screen-accept" className="screen active">
      <span className="logo-oz lg" aria-label="OZ" />
      <p className="accept-text">
        Tu es sur le point de rejoindre Oz.
        <strong>Appuie longuement pour accepter le parcours.</strong>
      </p>
      <div className="accept-button-wrap">
        <svg className="progress-ring" viewBox="0 0 200 200">
          <circle
            cx="100"
            cy="100"
            r="94"
            style={{ strokeDasharray: dash }}
          />
        </svg>
        <button
          className={`accept-button${pressing ? " pressing" : ""}`}
          onMouseDown={start}
          onMouseUp={stop}
          onMouseLeave={stop}
          onTouchStart={(e) => { e.preventDefault(); start(); }}
          onTouchEnd={(e) => { e.preventDefault(); stop(); }}
          onTouchCancel={stop}
          type="button"
        >
          <span className="label">Accepter</span>
        </button>
      </div>
      <p className="press-hint">Maintiens appuyé 1,5 seconde</p>
      <p className="tagline-bottom">Être prêt.</p>
    </section>
  );
}
