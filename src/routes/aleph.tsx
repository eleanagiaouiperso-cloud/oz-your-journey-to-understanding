import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/oz/Layout";
import { Field, TextInput, TextArea } from "@/components/oz/FormField";
import { emailRegex, frPhoneRegex } from "@/lib/validators";

export const Route = createFileRoute("/aleph")({
  head: () => ({
    meta: [
      { title: "Promo Aleph — Inscription | Oz" },
      { name: "description", content: "Rejoins la promo Aleph d'Oz : 50 personnes, en présentiel à Paris, mai 2026 à février 2027." },
      { property: "og:title", content: "Promo Aleph — Inscription | Oz" },
      { property: "og:description", content: "50 places. Paris. Mai 2026 → Février 2027." },
    ],
  }),
  component: AlephPage,
});

const HELLOASSO_URL = "https://www.helloasso.com/PLACEHOLDER";

function AlephPage() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const get = (k: string) => String(fd.get(k) ?? "").trim();

    const errs: Record<string, string> = {};
    if (!get("prenom")) errs.prenom = "Champ requis";
    if (!get("nom")) errs.nom = "Champ requis";
    if (!emailRegex.test(get("email"))) errs.email = "Email invalide";
    if (!frPhoneRegex.test(get("telephone"))) errs.telephone = "Numéro français invalide";
    if (!get("date_naissance")) errs.date_naissance = "Champ requis";
    if (!get("ville")) errs.ville = "Champ requis";
    if (!fd.get("rgpd")) errs.rgpd = "Tu dois accepter pour continuer";

    setErrors(errs);
    if (Object.keys(errs).length) return;

    setSubmitting(true);
    // TODO: INSERT inscriptions_promo (oz='paris', promo='aleph', statut='paiement_en_attente')
    setTimeout(() => {
      setSubmitted(true);
      window.location.href = HELLOASSO_URL;
    }, 300);
  }

  if (submitted) {
    return (
      <Layout>
        <section className="oz-section">
          <div className="oz-container text-center">
            <h1 className="text-3xl mb-4">Merci !</h1>
            <p className="mb-6">Tu vas être redirigé(e) vers HelloAsso pour finaliser ton inscription.</p>
            <a href={HELLOASSO_URL} className="oz-btn">Continuer vers le paiement</a>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="oz-section">
        <div className="oz-container">
          <Link to="/" className="text-xs uppercase tracking-widest text-muted-foreground hover:text-[var(--oz-navy)]">← Retour</Link>
          <h1 className="text-3xl mt-4 mb-2">M'inscrire à la promo Aleph</h1>
          <p className="text-foreground/80 mb-8">
            Tu rejoins une promo de 50 personnes, en présentiel à Paris, mai 2026 à février 2027.
          </p>

          <form onSubmit={onSubmit} noValidate>
            <Field label="Prénom" required error={errors.prenom}>
              <TextInput name="prenom" autoComplete="given-name" />
            </Field>
            <Field label="Nom" required error={errors.nom}>
              <TextInput name="nom" autoComplete="family-name" />
            </Field>
            <Field label="Email" required error={errors.email}>
              <TextInput name="email" type="email" autoComplete="email" />
            </Field>
            <Field label="Téléphone" required error={errors.telephone} hint="Format français : 06 12 34 56 78">
              <TextInput name="telephone" type="tel" autoComplete="tel" />
            </Field>
            <Field label="Date de naissance" required error={errors.date_naissance}>
              <TextInput name="date_naissance" type="date" />
            </Field>
            <Field label="Ville" required error={errors.ville}>
              <TextInput name="ville" autoComplete="address-level2" />
            </Field>
            <Field label="Comment as-tu connu Oz ?">
              <TextArea name="source" placeholder="Optionnel" />
            </Field>

            <label className="flex items-start gap-3 mb-6 text-sm">
              <input type="checkbox" name="rgpd" className="mt-1" />
              <span>
                J'accepte que mes données soient traitées dans le cadre de mon inscription à la promo Aleph.
                {errors.rgpd && <span className="block text-[var(--oz-red)] text-xs mt-1">{errors.rgpd}</span>}
              </span>
            </label>

            <button type="submit" disabled={submitting} className="oz-btn w-full">
              {submitting ? "Redirection…" : "Continuer vers le paiement"}
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
}
