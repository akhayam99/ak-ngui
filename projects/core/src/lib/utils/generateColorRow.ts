import { generateContrastFromColor } from "./generateContrastFromColor";

export function generateColorRow(name: string, color: string, shade: number): string {
  return `
    --ak-${name}-${shade}: ${color};
    --ak-${name}-${shade}-contrast: ${generateContrastFromColor(color)};
  `;
}
