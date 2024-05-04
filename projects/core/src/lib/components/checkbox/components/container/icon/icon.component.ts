import { Component, HostBinding, Input } from '@angular/core';
import { IconComponent } from '../../../../icon/icon.component';
import { CheckboxSize } from '../../../types/CheckboxSize';

@Component({
  selector: 'ak-checkbox-container-icon',
  template: `<ak-icon [name]="isIndeterminate ? 'minus' : 'check'">`,
  styleUrls: ['icon.component.scss'],
  standalone: true,
  imports: [IconComponent]
})

export class CheckboxContainerIconComponent {

  @HostBinding('class') @Input() size: CheckboxSize = 'md';
  @HostBinding('style.color') @Input() color!: string;

  @Input() isIndeterminate: boolean = false;

}
