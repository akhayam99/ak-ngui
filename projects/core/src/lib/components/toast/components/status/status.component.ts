import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IconComponent } from '../../../_common/icon/icon.component';

@Component({
  selector: 'ak-toast-status',
  template: `<ak-icon [name]="iconName" [size]="'sm'" [color]="color" />`,
  standalone: true,
  styleUrls: ['status.component.scss'],
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ToastStatusComponent implements OnChanges {

  iconName: string = ''

  @Input() color!: string
  @Input() status: string = ''

  ngOnChanges(changes: SimpleChanges): void {
    if (!!changes?.['status'])
      this.iconName = this.updateIconName()
  }

  updateIconName(): string {
    switch (this.status) {
      case 'success': return 'check'
      case 'error': return 'circle-exclamation'
      case 'warning': return 'triangle-exclamation'
      case 'info': return 'circle-info'
      default: return 'circle-info'
    }
  }
}
