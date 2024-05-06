import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { InputContainerComponent } from './components/container/container.component';
import { InputDetailComponent } from './components/detail/detail.component';
import { InputSize } from './types/InputSize';

@Component({
  selector: 'ak-input',
  templateUrl: 'input.component.html',
  styleUrls: ['input.component.scss'],
  standalone: true,
  imports: [InputContainerComponent, InputDetailComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class InputComponent {

  @Input() size: InputSize = 'md';
  @Input() value: string = '';

  @Output() valueChange = new EventEmitter<string>();

  updateValue(new_value: string): void {
    this.value = new_value;
    this.valueChange.emit(new_value)
  }

}
