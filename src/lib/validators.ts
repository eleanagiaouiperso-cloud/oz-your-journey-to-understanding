export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Permissive French phone: accepts 0X XX XX XX XX, +33 X XX..., spaces/dots/dashes
export const frPhoneRegex = /^(?:(?:\+|00)33[\s.-]?(?:\(0\)[\s.-]?)?|0)[1-9](?:[\s.-]?\d{2}){4}$/;

export function validateRequired(v: string) {
  return v.trim().length > 0;
}
