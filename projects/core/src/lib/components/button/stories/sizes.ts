const roles = ['primary', 'secondary']
const sizes = ['small', 'medium', 'large']

export const BUTTON_SIZES = ({
  template: `
    <div style="display: flex; flex-direction: column; gap: 16px">
      ${roles.map(role => `
        <div style="display: flex; gap: 16px; align-items: center">
          ${sizes.map(size => `
            <button [ak-button] [label]="'${size.toUpperCase()}'" [size]="'${size}'" [color]="'${role}'"></button>
          `).join('')}
        </div>
      `).join('')}
    </div>
  `,
});
