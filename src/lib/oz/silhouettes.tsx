import type { JSX } from "react";

// 4 silhouettes simples — head + body abstract
function S1() {
  return (
    <svg viewBox="0 0 80 110" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="20" r="14" fill="var(--bordeaux)" />
      <path d="M14 110 Q14 60 40 60 Q66 60 66 110 Z" fill="var(--bordeaux)" />
    </svg>
  );
}
function S2() {
  return (
    <svg viewBox="0 0 80 110" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="22" r="13" fill="var(--orange)" />
      <path d="M16 110 L16 70 Q16 58 40 58 Q64 58 64 70 L64 110 Z" fill="var(--orange)" />
      <path d="M40 35 Q34 38 34 45" stroke="var(--bordeaux)" strokeWidth="2" fill="none" />
    </svg>
  );
}
function S3() {
  return (
    <svg viewBox="0 0 80 110" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="20" r="14" fill="var(--pilier-connaitre)" />
      <rect x="20" y="58" width="40" height="52" fill="var(--pilier-connaitre)" />
      <rect x="20" y="58" width="40" height="6" fill="var(--bordeaux)" />
    </svg>
  );
}
function S4() {
  return (
    <svg viewBox="0 0 80 110" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="22" r="14" fill="var(--pilier-transmettre)" />
      <path d="M18 110 Q18 56 40 56 Q62 56 62 110 Z" fill="var(--pilier-transmettre)" />
      <circle cx="34" cy="20" r="2" fill="var(--bordeaux)" />
      <circle cx="46" cy="20" r="2" fill="var(--bordeaux)" />
    </svg>
  );
}

export const SILHOUETTES: { id: string; render: () => JSX.Element }[] = [
  { id: "s1", render: S1 },
  { id: "s2", render: S2 },
  { id: "s3", render: S3 },
  { id: "s4", render: S4 },
];
