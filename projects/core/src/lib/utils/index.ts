import { AkCreateTheme } from "../theme"

export const
  StorybookThemeDecorator = (story: string): string => {
    AkCreateTheme({

    })
    return `<div> ${story} </div>`
  }
