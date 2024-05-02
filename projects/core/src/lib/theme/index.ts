import { DEFAULT_COLORS } from "./colors"
import { DEFAULT_SIZES } from "./sizes"
import { getStyledColors } from "./utils/colors"
import { getStyledSizes } from "./utils/sizes"

let themeLoaded = false

type AkTheme = {
  colors?: any,
  sizes?: any,
}

export const LoadTheme = (params: AkTheme) => {

  if (themeLoaded)
    return

  const style = document.createElement('style')

  style.appendChild(document.createTextNode(`:root {
    font-family: 'Inter UI', sans-serif;
    ${getStyledColors({ ...DEFAULT_COLORS, ...params?.colors || {} })}
    ${getStyledSizes({ ...DEFAULT_SIZES, ...params?.sizes || {} })}
  }`))

  document.head.appendChild(style)
  themeLoaded = true
}
