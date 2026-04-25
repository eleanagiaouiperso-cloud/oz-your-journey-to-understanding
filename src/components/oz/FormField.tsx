import type { InputHTMLAttributes, TextareaHTMLAttributes, ReactNode } from "react";

type FieldProps = {
  label: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
  hint?: string;
};

export function Field({ label, required, error, children, hint }: FieldProps) {
  return (
    <div className="mb-4">
      <label className="oz-label">
        {label} {required && <span style={{ color: "var(--oz-orange)" }}>*</span>}
      </label>
      {children}
      {hint && !error && <p className="text-xs text-muted-foreground mt-1">{hint}</p>}
      {error && <p className="text-xs mt-1" style={{ color: "var(--pilier-secourir)" }}>{error}</p>}
    </div>
  );
}

export function TextInput(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={`oz-input ${props.className ?? ""}`} />;
}

export function TextArea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} rows={props.rows ?? 4} className={`oz-input resize-y ${props.className ?? ""}`} />;
}
