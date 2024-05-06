import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'ak-toast-state',
  template: ``,
  standalone: true,
  styleUrls: ['state.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ToastStateComponent {
  @HostBinding('style.background-color') @Input() color!: string
}
