import { NgIf } from '@angular/common';
import { Component, HostBinding, Input } from '@angular/core';
import { CheckboxSize } from '../../../types/CheckboxSize';

@Component({
  selector: 'ak-checkbox-container-icon',
  template: `{{ isIndeterminate ? "—" : "✓" }}`,
  styleUrls: ['icon.component.scss'],
  standalone: true,
  imports: [NgIf]
})

export class CheckboxContainerIconComponent {

  @HostBinding('class') @Input() size: CheckboxSize = 'md';

  @Input() isIndeterminate: boolean = false;

}
