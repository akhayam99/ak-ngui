import { generateColorRow } from "."

export function generateThemeColors(items: { [key: string]: string[] }): string {
  return Object
    .keys(items)
    .map(item => items[item]
      .map((value, index) => generateColorRow(item, value, index)).join('\n')
    ).join(`\n`)
}
