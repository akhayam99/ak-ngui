import { akTheme } from "../theme";

export function colorKeyFromTheme(key?: string): string {
  const { colorKeys, roleKeys, statusKeys } = akTheme;

  if (!key)
    return "cneutral";

  if (statusKeys?.includes(key))
    return akTheme?.status[key];

  if (roleKeys?.includes(key))
    return akTheme?.roles[key];

  return colorKeys?.includes(key) ? key : "cneutral";
}
