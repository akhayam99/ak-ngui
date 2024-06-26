import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { ToggleSize } from '../../../types/ToggleSize';

@Component({
  selector: 'ak-toggle-container-thumb',
  template: '',
  styleUrls: ['thumb.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ToggleContainerThumbComponent {
  @HostBinding('class.is-checked') @Input() isChecked: boolean = false;
  @HostBinding('class') @Input() size: ToggleSize = 'md';
}
