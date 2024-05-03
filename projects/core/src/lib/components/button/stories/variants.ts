const roles = ['primary', 'secondary']
const variants = ['filled', 'outlined']

export const BUTTON_VARIANTS = ({
  template: `
    <div style="display: flex; flex-direction: column; gap: 16px">
      ${roles.map(role => `
        <div style="display: flex; gap: 16px; align-items: center">
          ${variants.map(variant => `
            <button [ak-button] [label]="'${variant.toUpperCase()}'" [variant]="'${variant}'" [role]="'${role}'"></button>
          `).join('')}
        </div>
      `).join('')}
    </div>
  `,
});
