import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'ak-toggle-container-on-off',
  template: `{{ isChecked ? 'I' : 'O' }}`,
  styleUrls: ['on-off.component.scss'],
  standalone: true,
})

export class ToggleContainerOnOffComponent {

  @HostBinding('class.is-checked') @Input() isChecked!: boolean;
  @HostBinding('class') @Input() size!: string;

}
