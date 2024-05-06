import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { ColorFromKeyPipe } from '../../pipes';
import { colorKeyFromTheme } from '../../utils';
import { IconComponent } from '../_common/icon/icon.component';
import { ToastActionComponent } from './components/action/action.component';
import { ToastStateComponent } from './components/state/state.component';
import { ToastStatusComponent } from './components/status/status.component';

@Component({
  selector: 'ak-toast',
  templateUrl: 'toast.component.html',
  styleUrls: ['toast.component.scss'],
  standalone: true,
  imports: [
    IconComponent,
    ColorFromKeyPipe,
    ToastStateComponent,
    ToastStatusComponent,
    ToastActionComponent,
    NgIf
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ToastComponent implements OnChanges {

  colorKey: string = 'gray';

  @Input() color: string = '';
  @Input() role: string = '';
  @Input() status: string = '';
  @Input() title: string = '';
  @Input() message: string = '';
  @Input() loading: boolean = false;
  @Input() closable: boolean = true;

  @Output() closeClick = new EventEmitter()

  ngOnChanges(changes: SimpleChanges): void {
    if (!!changes?.['color'] || !!changes?.['role'] || !!changes?.['status']) {
      this.colorKey = this.updateColorKey()
    }
  }

  updateColorKey(): string {
    return colorKeyFromTheme(this.status || this.role || this.color);
  }
}
