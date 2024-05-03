
export function getStyledSizes(sizes: any): string {
  return Object.keys(sizes).map(
    size => `--ak-size-${size}: ${sizes[size]}`
  ).join(';\n') + ';'
}
