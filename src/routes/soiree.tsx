import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/oz/Layout";
import { Field, TextInput } from "@/components/oz/FormField";
import { emailRegex, frPhoneRegex } from "@/lib/validators";

export const Route = createFileRoute("/soiree")({
  head: () => ({
    meta: [
      { title: "Soirée de lancement | Oz" },
      { name: "description", content: "Tu étais à la soirée de lancement d'Oz ? Laisse-nous tes coordonnées pour rester en contact." },
      { property: "og:title", content: "Soirée de lancement | Oz" },
      { property: "og:description", content: "Reste en contact après la soirée du 27 avril 2026." },
    ],
  }),
  component: SoireePage,
});

function SoireePage() {
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
    if (!fd.get("rgpd")) errs.rgpd = "Tu dois accepter pour continuer";
    setErrors(errs);
    if (Object.keys(errs).length) return;
    // TODO: INSERT participants_evenement (evenement par défaut: lancement-2026-04-27)
    setDone(true);
  }

  if (done) {
    return (
      <Layout>
        <section className="oz-section">
          <div className="oz-container text-center">
            <h1 className="text-3xl mb-4">Merci !</h1>
            <p>On garde le contact. À très vite.</p>
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
          <h1 className="text-3xl mt-4 mb-2">J'étais à la soirée de lancement</h1>
          <p className="text-foreground/80 mb-8">Laisse-nous tes coordonnées pour rester en contact.</p>

          <form onSubmit={onSubmit} noValidate>
            <Field label="Prénom" required error={errors.prenom}><TextInput name="prenom" autoComplete="given-name" /></Field>
            <Field label="Nom" required error={errors.nom}><TextInput name="nom" autoComplete="family-name" /></Field>
            <Field label="Email" required error={errors.email}><TextInput name="email" type="email" autoComplete="email" /></Field>
            <Field label="Téléphone" required error={errors.telephone} hint="Format français"><TextInput name="telephone" type="tel" autoComplete="tel" /></Field>

            <label className="flex items-start gap-3 mb-6 text-sm">
              <input type="checkbox" name="rgpd" className="mt-1" />
              <span>J'accepte que mes données soient traitées pour rester en contact avec Oz.
                {errors.rgpd && <span className="block text-[var(--pilier-secourir)] text-xs mt-1">{errors.rgpd}</span>}
              </span>
            </label>

            <button type="submit" className="oz-btn w-full">Envoyer</button>
          </form>
        </div>
      </section>
    </Layout>
  );
}
