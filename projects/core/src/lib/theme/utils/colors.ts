
function getColorShade(colors: any, color: string, shade: string): string {
  return `--ak-color-${color}-${shade}: ${colors[color][shade]['value']};`
}

function getColorShadeContrast(colors: any, color: string, shade: string): string {
  return `--ak-color-${color}-${shade}-contrast: ${colors[color][shade]['contrast']};`
}

export function getStyledColors(colors: any): string {
  return Object.keys(colors).map(
    color => Object.keys(colors[color]).map(shade => `
      ${getColorShade(colors, color, shade)}
      ${getColorShadeContrast(colors, color, shade)}
    `
    ).join(';\n')
  ).join(';\n') + ';'
}
