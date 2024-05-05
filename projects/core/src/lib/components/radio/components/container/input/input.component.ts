import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';
import { RadioSize } from '../../../types/RadioSize';

@Component({
  selector: 'input[ak-radio-container-input]',
  template: '',
  styleUrls: ['input.component.scss'],
  standalone: true,
  imports: [NgIf],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class RadioContainerInputComponent {

  @HostBinding('class') @Input() size: RadioSize = 'md';
  @HostBinding('style.background-color') @Input() bgColor!: string;
  @HostBinding('style.border-color') @Input() borderColor!: string;

  @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter')
      this.enterPressed.emit()
  }

  @Input() isChecked: boolean = false;
  @Input() isIndeterminate: boolean = false;

  @Output() enterPressed = new EventEmitter<void>();

}
