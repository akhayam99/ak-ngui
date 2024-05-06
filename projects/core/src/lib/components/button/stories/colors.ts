import { akTheme } from "../../../theme";

const colors = akTheme.colorKeys as string[];
const variants = ['filled', 'outlined', 'ghost']

// export const BUTTON_COLORS = ({
//   template: `
//     <div style="display: flex; gap: 16px; align-items: center">
//       ${colors.map(color => `
//         <button [ak-button] [label]="'${color.toUpperCase()}'" [color]="'${color}'"></button>
//       `).join('')}
//     </div>
//   `,
// });

export const BUTTON_COLORS = ({
  template: `
    <div style="display: flex; flex-direction: row; gap: 16px">
      ${variants.map(variant => `
        <div style="display: flex; gap: 16px; align-items: center; flex-direction: column">
          ${colors.map(color => `
            <button [ak-button] [label]="'${color.toUpperCase()}'" [color]="'${color}'" [variant]="'${variant}'" [fullWidth]="true"></button>
          `).join('')}
        </div>
      `).join('')}
    </div>
  `,
})
