import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { IconComponent } from '../../../../_common/icon/icon.component';
import { CheckboxSize } from '../../../types/CheckboxSize';

@Component({
  selector: 'ak-checkbox-container-icon',
  template: `<ak-icon [name]="iconName" [color]="color" [size]="iconSize"/>`,
  styleUrls: ['icon.component.scss'],
  standalone: true,
  imports: [IconComponent, NgIf],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class CheckboxContainerIconComponent {

  @HostBinding('class') @Input() size: CheckboxSize = 'md';
  @Input() color!: string;
  @Input() isIndeterminate: boolean = false;

  get iconName(): string {
    return this.isIndeterminate ? 'minus' : 'check'
  }

  get iconSize(): string {
    switch (this.size) {
      case 'sm': return 'xs'
      case 'lg': return 'md'
      case 'md': default: return 'sm'
    }
  }
}
