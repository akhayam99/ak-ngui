const roles = ['primary', 'secondary']

export const BUTTON_ROLES = ({
  template: `
    <div style="display: flex; gap: 16px; align-items: center">
      ${roles.map(role => `
        <button [ak-button] [label]="'${role.toUpperCase()}'" [role]="'${role}'"></button>
      `).join('')}
    </div>
  `,
});
