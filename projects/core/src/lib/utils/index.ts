import { CreateTheme } from "../theme"

export const
  StorybookThemeDecorator = (story: string): string => {
    CreateTheme({})

    return `<div> ${story} </div>`
  }
