import { akTheme } from "../theme";

export function colorFromKey(key: string): string {
  return akTheme?.colors?.[key]?.[5] || "#000000";
}
