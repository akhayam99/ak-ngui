const colors = ['cblue', 'cred', 'corange', 'cgreen', 'cyellow', 'cneutral'];
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
    <div style="display: flex; flex-direction: column; gap: 16px">
      ${variants.map(variant => `
        <div style="display: flex; gap: 16px; align-items: center">
          ${colors.map(color => `
            <button [ak-button] [label]="'${color.toUpperCase()}'" [color]="'${color}'" [variant]="'${variant}'"></button>
          `).join('')}
        </div>
      `).join('')}
    </div>
  `,
})
