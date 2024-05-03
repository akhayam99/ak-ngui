const status = ['success', 'error', 'warning', 'info']

export const BUTTON_STATUS = ({
  template: `
    <div style="display: flex; gap: 16px; align-items: center">
      ${status.map(status => `
        <button [ak-button] [label]="'${status.toUpperCase()}'" [status]="'${status}'"></button>
      `).join('')}
    </div>
  `,
});
