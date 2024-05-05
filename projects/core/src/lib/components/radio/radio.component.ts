import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { RadioContainerComponent } from './components/container/container.component';
import { RadioDetailComponent } from './components/detail/detail.component';
import { RadioSize } from './types/RadioSize';

@Component({
  selector: 'ak-radio',
  templateUrl: 'radio.component.html',
  styleUrls: ['radio.component.scss'],
  standalone: true,
  imports: [RadioContainerComponent, RadioDetailComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class RadioComponent {

  @HostBinding('class') @Input() size: RadioSize = 'md';

  @Input() color: string = 'neutral';
  @Input() role: string = '';
  @Input() status: string = '';
  @Input() label: string = '';
  @Input() value: boolean = false;

  @HostBinding('class') @Input() labelPosition: 'left' | 'right' = 'right';

  @Output() onChange = new EventEmitter();

  updateValue() {
    this.value = !this.value;
    this.onChange.emit(this.value);
  }

}
