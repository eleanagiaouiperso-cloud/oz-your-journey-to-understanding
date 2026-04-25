import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/oz/Layout";
import { Field, TextInput, TextArea } from "@/components/oz/FormField";
import { emailRegex, frPhoneRegex } from "@/lib/validators";

export const Route = createFileRoute("/createur")({
  head: () => ({
    meta: [
      { title: "Créer un Oz | Oz" },
      { name: "description", content: "Lance un Oz dans ta ville, ton mouvement de jeunesse ou ton réseau." },
      { property: "og:title", content: "Créer un Oz | Oz" },
      { property: "og:description", content: "Lance un Oz dans ta ville, ton mouvement ou ton réseau." },
    ],
  }),
  component: CreateurPage,
});

function CreateurPage() {
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
    if (!get("ville_oz")) errs.ville_oz = "Champ requis";
    if (!fd.get("lien_moadon")) errs.lien_moadon = "Choisis une option";
    if (!get("motivation")) errs.motivation = "Champ requis";
    if (!fd.get("rgpd")) errs.rgpd = "Tu dois accepter pour continuer";
    setErrors(errs);
    if (Object.keys(errs).length) return;
    // TODO: INSERT candidatures_createur
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
          <h1 className="text-3xl mt-4 mb-2">Créer un Oz</h1>
          <p className="text-foreground/80 mb-8">
            Tu veux créer un Oz dans ta ville, ton mouvement de jeunesse ou ton réseau ? Postule ici.
          </p>

          <form onSubmit={onSubmit} noValidate>
            <Field label="Prénom" required error={errors.prenom}><TextInput name="prenom" autoComplete="given-name" /></Field>
            <Field label="Nom" required error={errors.nom}><TextInput name="nom" autoComplete="family-name" /></Field>
            <Field label="Email" required error={errors.email}><TextInput name="email" type="email" autoComplete="email" /></Field>
            <Field label="Téléphone" required error={errors.telephone} hint="Format français"><TextInput name="telephone" type="tel" autoComplete="tel" /></Field>
            <Field label="Ville où lancer Oz" required error={errors.ville_oz}><TextInput name="ville_oz" /></Field>

            <Field label="Lien à Moadon ?" required error={errors.lien_moadon}>
              <div className="flex flex-col gap-2 text-sm">
                {[
                  { v: "oui", l: "Oui" },
                  { v: "non", l: "Non" },
                  { v: "ne_sais_pas", l: "Je ne sais pas" },
                ].map((o) => (
                  <label key={o.v} className="flex items-center gap-2">
                    <input type="radio" name="lien_moadon" value={o.v} /> {o.l}
                  </label>
                ))}
              </div>
            </Field>

            <Field label="Motivation" required error={errors.motivation}>
              <TextArea name="motivation" placeholder="Pourquoi toi, pourquoi ce contexte ?" />
            </Field>

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
