export function colorContrast(color: string): string {
  if (!color)
    return '000000';

  if (color.includes('#'))
    color = color.replace('#', '');
  const red = parseInt(color.slice(0, 2), 16) * 0.299;
  const green = parseInt(color.slice(2, 4), 16) * 0.587;
  const blue = parseInt(color.slice(4, 6), 16) * 0.114;
  const contrast = red + green + blue > 186 ? '#000000' : '#FFFFFF';

  return contrast;
}
