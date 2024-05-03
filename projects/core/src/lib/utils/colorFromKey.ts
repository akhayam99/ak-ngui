import { akTheme } from "../theme";

export function colorFromKey(key: string, shade: number = 5): string {
  return akTheme?.colors?.[key]?.[shade] || "#000000";
}
