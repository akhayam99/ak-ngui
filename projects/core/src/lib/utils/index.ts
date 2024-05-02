import { LoadTheme } from "../theme"

export const StorybookThemeDecorator = (story: string): string => {
  LoadTheme({})
  return `<div> ${story} </div>`
}
