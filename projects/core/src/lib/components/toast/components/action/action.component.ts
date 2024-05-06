import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { IconComponent } from '../../../_common/icon/icon.component';
import { SpinnerComponent } from '../../../spinner/spinner.component';

@Component({
  selector: 'ak-toast-action',
  templateUrl: 'action.component.html',
  styleUrls: ['action.component.scss'],
  standalone: true,
  imports: [
    IconComponent,
    NgIf,
    SpinnerComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ToastActionComponent {

  @HostBinding('class.is-closable') @Input() closable!: boolean
  @HostBinding('class.is-loading') @Input() loading!: boolean

  @Input() color!: string

  @Output() closeClick = new EventEmitter()

}
