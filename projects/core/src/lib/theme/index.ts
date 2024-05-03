import { DEFAULT_COLORS } from "./colors"
import { generateThemeColors } from "./colors/utils"
import { DEFAULT_ROLES } from "./roles"
import { generateThemeRoles } from "./roles/utils"
import { DEFAULT_SIZES } from "./sizes"
import { getStyledSizes } from "./sizes/utils"
import { DEFAULT_STATUS } from "./status"
import { generateThemeStatus } from "./status/utils"

let themeLoaded = false

type AkTheme = {
  colors?: any,
  sizes?: any,
  roles?: any,
  status?: any,
  colorKeys?: string[],
  roleKeys?: string[],
  statusKeys?: string[],
}

export let akTheme: AkTheme = {
  colors: DEFAULT_COLORS,
  sizes: DEFAULT_SIZES,
  roles: DEFAULT_ROLES,
  status: DEFAULT_STATUS,
  colorKeys: Object.keys(DEFAULT_COLORS),
  roleKeys: Object.keys(DEFAULT_ROLES),
  statusKeys: Object.keys(DEFAULT_STATUS),
}

export const CreateTheme = (params: AkTheme) => {
  if (themeLoaded)
    return

  const colors = { ...DEFAULT_COLORS, ...params?.colors || {} }
  const roles = { ...DEFAULT_ROLES, ...params?.roles || {} }
  const sizes = { ...DEFAULT_SIZES, ...params?.sizes || {} }
  const status = { ...DEFAULT_STATUS, ...params?.status || {} }

  akTheme = {
    colors,
    sizes,
    roles,
    status,
    colorKeys: Object.keys(colors),
    roleKeys: Object.keys(roles),
    statusKeys: Object.keys(status),
  }

  let generatedColors = generateThemeColors(colors)
  let generatedRoles = generateThemeRoles(colors, roles)
  let generatedSizes = getStyledSizes(sizes)
  let generatedStatus = generateThemeStatus(colors, status)

  const style = document.createElement('style')
  style.appendChild(document.createTextNode(`:root {${generatedColors}}`))
  style.appendChild(document.createTextNode(`:root {${generatedRoles}}`))
  style.appendChild(document.createTextNode(`:root {${generatedSizes}}`))
  style.appendChild(document.createTextNode(`:root {${generatedStatus}}`))
  style.appendChild(document.createTextNode(`body * { font-family: 'Inter UI', sans-serif }`))
  document.head.appendChild(style)

  themeLoaded = true
}
