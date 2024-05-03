import { generateColorRow } from ".";

export function generateThemeStatus(colors: { [key: string]: string[] }, status: any) {
  return Object
    .keys(status)
    .map(statusName => colors[status[statusName]]
      .map((value, index) => generateColorRow(statusName, value, index)).join('\n')
    ).join('\n')
}
