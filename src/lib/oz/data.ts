// Données du parcours Oz — promo Aleph

export type PilierKey = "c" | "d" | "t" | "s";

export const PILIERS: Record<PilierKey, { name: string; color: string }> = {
  c: { name: "Connaître", color: "var(--pilier-connaitre)" },
  d: { name: "Défendre", color: "var(--pilier-defendre)" },
  t: { name: "Transmettre", color: "var(--pilier-transmettre)" },
  s: { name: "Secourir", color: "var(--pilier-secourir)" },
};

export type Occurrence = {
  id: string;
  date: string;
  meta: string;
  state: "open" | "inscrit" | "done" | "full" | "checkin";
};

export type Mois = {
  n: number;
  pilier: PilierKey;
  nom: string;
  theme: string;
  next?: boolean;
  done?: boolean;
  lundis?: Occurrence[];
  mardis?: Occurrence[];
  dimanches?: Occurrence[];
};

export const MOIS: Mois[] = [
  {
    n: 1,
    pilier: "c",
    nom: "Mai",
    theme: "Racines de l'antisémitisme — l'histoire longue",
    next: true,
    lundis: [
      { id: "m1l1", date: "Lun 25 mai", meta: "20h · CEJ Paris · 28 places", state: "open" },
    ],
    mardis: [
      { id: "m1m1", date: "Mar 26 mai", meta: "20h · CEJ Paris · 24 places", state: "open" },
    ],
    dimanches: [
      { id: "m1d1", date: "Dim 31 mai", meta: "Secourir · MADA · 10h-13h", state: "open" },
    ],
  },
  {
    n: 2,
    pilier: "d",
    nom: "Juin",
    theme: "Posture & verbal — répondre sans s'effacer",
    lundis: [{ id: "m2l1", date: "Lun 22 juin", meta: "20h · CEJ Paris", state: "open" }],
    mardis: [{ id: "m2m1", date: "Mar 23 juin", meta: "20h · CEJ Paris", state: "open" }],
  },
  {
    n: 3,
    pilier: "t",
    nom: "Juil.",
    theme: "Transmettre l'identité — aux enfants, aux proches",
    lundis: [{ id: "m3l1", date: "Lun 6 juil.", meta: "20h · CEJ Paris", state: "open" }],
    mardis: [{ id: "m3m1", date: "Mar 7 juil.", meta: "20h · CEJ Paris", state: "open" }],
  },
  {
    n: 4,
    pilier: "s",
    nom: "Sept.",
    theme: "Premiers secours — gestes qui sauvent",
    dimanches: [{ id: "m4d1", date: "Dim 14 sept.", meta: "MADA · journée complète", state: "open" }],
  },
  {
    n: 5,
    pilier: "c",
    nom: "Oct.",
    theme: "Antisionisme & antisémitisme — distinguer",
    lundis: [{ id: "m5l1", date: "Lun 12 oct.", meta: "20h · CEJ Paris", state: "open" }],
  },
  {
    n: 6,
    pilier: "d",
    nom: "Nov.",
    theme: "Défense physique — bases du self-défense",
    mardis: [{ id: "m6m1", date: "Mar 17 nov.", meta: "20h · Salle dojo Paris", state: "open" }],
  },
  {
    n: 7,
    pilier: "t",
    nom: "Déc.",
    theme: "Récit & mémoire — porter une histoire",
    lundis: [{ id: "m7l1", date: "Lun 14 déc.", meta: "20h · CEJ Paris", state: "open" }],
  },
  {
    n: 8,
    pilier: "s",
    nom: "Janv.",
    theme: "Réagir face à un agresseur — désescalade",
    mardis: [{ id: "m8m1", date: "Mar 19 janv.", meta: "20h · CEJ Paris", state: "open" }],
  },
  {
    n: 9,
    pilier: "c",
    nom: "Févr.",
    theme: "Antisémitisme contemporain — médias & réseaux",
    lundis: [{ id: "m9l1", date: "Lun 8 févr.", meta: "20h · CEJ Paris", state: "open" }],
  },
  {
    n: 10,
    pilier: "d",
    nom: "Mars",
    theme: "Engagement — passer à l'action collective",
    mardis: [{ id: "m10m1", date: "Mar 9 mars", meta: "20h · CEJ Paris · cérémonie", state: "open" }],
  },
];

export const OZ_CHAPTERS = [
  { id: "paris", name: "Oz Paris", meta: "Lancé le 27 avril 2026 · 1re promo 25 mai", locked: false },
  { id: "eeif", name: "Oz EEIF", meta: "Pour les scouts · ouverture prévue sept. 2026", locked: true },
  { id: "moadon", name: "Oz Moadon", meta: "Réservé membres Moadon · ouv. oct. 2026", locked: true },
  { id: "strasbourg", name: "Oz Strasbourg", meta: "Ouverture prévue nov. 2026", locked: true },
];

export const PROMOS = [
  {
    id: "aleph",
    name: "Aleph",
    tag: "1re promo",
    dates: "Mai 2026 → mars 2027",
    meta: "Promo de lancement · CEJ Paris",
    places: 28,
    placesMax: 30,
    full: false,
  },
  {
    id: "beth",
    name: "Beth",
    tag: "Sept. 2026",
    dates: "Sept. 2026 → juin 2027",
    meta: "Rentrée d'automne",
    places: 0,
    placesMax: 30,
    full: false,
  },
  {
    id: "gimel",
    name: "Gimel",
    tag: "Janv. 2027",
    dates: "Janv. 2027 → oct. 2027",
    meta: "Promo d'hiver",
    places: 0,
    placesMax: 30,
    full: false,
  },
];

export const AMBASSADEUR_MESSAGE = `Salut [prénom],

J'espère que tu vas bien !

Je t'écris car j'ai découvert OZ récemment et je pense que ça va te parler.

Oz part d'un constat simple : il y a de plus en plus d'antisémitisme en France, notamment depuis le 7 octobre, mais rien ne nous prépare vraiment à y faire face.

Oz propose un parcours pour se préparer concrètement : connaître les racines de l'antisémitisme, savoir utiliser les bons mots et la bonne posture pour y répondre verbalement, physiquement lorsque c'est nécessaire, et même être capable de secourir une personne en détresse. Bref, ne plus être démuni. Être prêt.

C'est structuré, avec des ateliers à la fois physiques et intellectuels, et une vraie progression dans le temps.

Il y a une soirée de lancement le 27 avril au CEJ pour découvrir le parcours. J'y serai, t'es chaud·e pour venir avec moi ? C'est ici pour prendre ta place 👉 https://parcours-oz.fr/soiree-lancement-inscription

C'est pas à toi que je vais dire que c'est le bon moment pour prendre part à ce type d'initiative.

Et voilà le compte Instagram : https://www.instagram.com/oz.officiel`;
