import { DEFAULT_COLORS } from "./colors"
import { DEFAULT_ROLES } from "./roles"
import { DEFAULT_SIZES } from "./sizes"
import { DEFAULT_STATUS } from "./status"
import { generateThemeColors } from "./utils/_colors"
import { generateThemeRoles } from "./utils/_roles"
import { getStyledSizes } from "./utils/_sizes"
import { generateThemeStatus } from "./utils/_status"
// import { getStyledColors } from "./utils/colors"

let themeLoaded = false

type AkTheme = {
  colors?: any,
  sizes?: any,
  roles?: any,
  status?: any
}

export let akTheme: AkTheme = {
  colors: DEFAULT_COLORS,
  sizes: DEFAULT_SIZES,
  roles: DEFAULT_ROLES,
  status: DEFAULT_STATUS
}

export const AkCreateTheme = (params: AkTheme) => {
  if (themeLoaded)
    return

  const colors = { ...DEFAULT_COLORS, ...params?.colors || {} }
  const roles = { ...DEFAULT_ROLES, ...params?.roles || {} }
  const sizes = { ...DEFAULT_SIZES, ...params?.sizes || {} }
  const status = { ...DEFAULT_STATUS, ...params?.status || {} }

  akTheme = { colors, sizes, roles, status }

  let generatedColors = generateThemeColors(colors)
  let generatedRoles = generateThemeRoles(colors, roles)
  let generatedSizes = getStyledSizes(sizes)
  let generatedStatus = generateThemeStatus(colors, status)

  const style = document.createElement('style')
  style.appendChild(document.createTextNode(`:root {${generatedColors}}`))
  style.appendChild(document.createTextNode(`:root {${generatedRoles}}`))
  style.appendChild(document.createTextNode(`:root {${generatedSizes}}`))
  style.appendChild(document.createTextNode(`:root {${generatedStatus}}`))
  document.head.appendChild(style)

  themeLoaded = true
}
