export function colorFromKey(key: string, shade: number = 5): string {
  return `var(--ak-${key}-${shade})` || `var(--ak-gray-0)`;
}
