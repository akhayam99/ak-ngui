import { akTheme } from "../theme";

export function colorShade(key: string, shade: number): string {
  return akTheme.colors[key]?.[shade]
}
