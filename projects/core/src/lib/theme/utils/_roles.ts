import { generateColorRow } from ".";

export function generateThemeRoles(colors: { [key: string]: string[] }, roles: any) {
  return Object
    .keys(roles)
    .map(role => colors[roles[role]]
      .map((value, index) => generateColorRow(role, value, index)).join('\n')
    ).join('\n')
}
