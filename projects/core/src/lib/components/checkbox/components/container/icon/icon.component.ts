import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { IconComponent } from '../../../../_common/icon/icon.component';
import { CheckboxSize } from '../../../types/CheckboxSize';

@Component({
  selector: 'ak-checkbox-container-icon',
  template: `<ak-icon [name]="isIndeterminate ? 'minus' : 'check'" [color]="color" />`,
  styleUrls: ['icon.component.scss'],
  standalone: true,
  imports: [IconComponent, NgIf],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class CheckboxContainerIconComponent {

  @HostBinding('class') @Input() size: CheckboxSize = 'md';

  @Input() color!: string;
  @Input() isIndeterminate: boolean = false;

}
