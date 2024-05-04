import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { CheckboxContainerComponent } from './components/container/container.component';
import { CheckboxDetailComponent } from './components/detail/detail.component';
import { CheckboxSize } from './types/CheckboxSize';

@Component({
  selector: 'ak-checkbox',
  templateUrl: 'checkbox.component.html',
  styleUrls: ['checkbox.component.scss'],
  standalone: true,
  imports: [CheckboxContainerComponent, CheckboxDetailComponent]
})

export class CheckboxComponent {

  @HostBinding('class') @Input() size: CheckboxSize = 'md';

  @Input() color: string = 'cneutral';
  @Input() role: string = '';
  @Input() status: string = '';
  @Input() indeterminate: boolean = false;
  @Input() label: string = '';
  @Input() value: boolean = false;

  @HostBinding('class') @Input() labelPosition: 'left' | 'right' = 'right';

  @Output() onChange = new EventEmitter();

  updateValue() {
    this.value = !this.value;
    this.onChange.emit(this.value);
  }

}
