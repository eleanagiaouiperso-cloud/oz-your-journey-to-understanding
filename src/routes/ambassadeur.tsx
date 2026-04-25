import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/oz/Layout";
import { Field, TextInput, TextArea } from "@/components/oz/FormField";
import { emailRegex, frPhoneRegex } from "@/lib/validators";

export const Route = createFileRoute("/ambassadeur")({
  head: () => ({
    meta: [
      { title: "Devenir Ambassadeur | Oz" },
      { name: "description", content: "Porte Oz dans ton réseau. Postule comme Ambassadeur." },
      { property: "og:title", content: "Devenir Ambassadeur | Oz" },
      { property: "og:description", content: "Porte Oz dans ton réseau. Postule comme Ambassadeur." },
    ],
  }),
  component: AmbassadeurPage,
});

function AmbassadeurPage() {
  const [done, setDone] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const get = (k: string) => String(fd.get(k) ?? "").trim();
    const errs: Record<string, string> = {};
    if (!get("prenom")) errs.prenom = "Champ requis";
    if (!get("nom")) errs.nom = "Champ requis";
    if (!emailRegex.test(get("email"))) errs.email = "Email invalide";
    if (!frPhoneRegex.test(get("telephone"))) errs.telephone = "Numéro français invalide";
    if (!get("ville")) errs.ville = "Champ requis";
    if (!fd.get("rgpd")) errs.rgpd = "Tu dois accepter pour continuer";
    setErrors(errs);
    if (Object.keys(errs).length) return;
    // TODO: INSERT candidatures_ambassadeur (oz='paris')
    setDone(true);
  }

  if (done) {
    return (
      <Layout>
        <section className="oz-section">
          <div className="oz-container text-center">
            <h1 className="text-3xl mb-4">Merci !</h1>
            <p>Ta candidature a bien été reçue. On revient vers toi sous 7 jours.</p>
            <Link to="/" className="oz-btn oz-btn--outline mt-8">Retour à l'accueil</Link>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="oz-section">
        <div className="oz-container">
          <Link to="/" className="text-xs uppercase tracking-widest text-muted-foreground hover:text-[var(--oz-orange)]">← Retour</Link>
          <h1 className="text-3xl mt-4 mb-2">Devenir Ambassadeur</h1>
          <p className="text-foreground/80 mb-8">Tu portes Oz dans ton cercle, ton mouvement, ton réseau.</p>

          <form onSubmit={onSubmit} noValidate>
            <Field label="Prénom" required error={errors.prenom}><TextInput name="prenom" autoComplete="given-name" /></Field>
            <Field label="Nom" required error={errors.nom}><TextInput name="nom" autoComplete="family-name" /></Field>
            <Field label="Email" required error={errors.email}><TextInput name="email" type="email" autoComplete="email" /></Field>
            <Field label="Téléphone" required error={errors.telephone} hint="Format français"><TextInput name="telephone" type="tel" autoComplete="tel" /></Field>
            <Field label="Ville" required error={errors.ville}><TextInput name="ville" autoComplete="address-level2" /></Field>
            <Field label="Motivation"><TextArea name="motivation" placeholder="Optionnel" /></Field>

            <label className="flex items-start gap-3 mb-6 text-sm">
              <input type="checkbox" name="rgpd" className="mt-1" />
              <span>J'accepte que mes données soient traitées dans le cadre de ma candidature.
                {errors.rgpd && <span className="block text-[var(--pilier-secourir)] text-xs mt-1">{errors.rgpd}</span>}
              </span>
            </label>

            <button type="submit" className="oz-btn w-full">Envoyer ma candidature</button>
          </form>
        </div>
      </section>
    </Layout>
  );
}
