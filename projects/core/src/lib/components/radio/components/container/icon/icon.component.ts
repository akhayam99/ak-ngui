import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { IconComponent } from '../../../../_common/icon/icon.component';
import { RadioSize } from '../../../types/RadioSize';

@Component({
  selector: 'ak-radio-container-icon',
  template: `<ak-icon [name]="'circle-dot'" [color]="color">`,
  styleUrls: ['icon.component.scss'],
  standalone: true,
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class RadioContainerIconComponent {

  @HostBinding('class') @Input() size: RadioSize = 'md';
  @HostBinding('style.color') @Input() color!: string;

}
