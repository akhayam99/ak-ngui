import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';
import { ToggleSize } from '../../../types/ToggleSize';

@Component({
  selector: 'input[ak-toggle-container-input]',
  template: '',
  styleUrls: ['input.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ToggleContainerInputComponent {
  @HostBinding('class') @Input() size: ToggleSize = 'md';
  @HostBinding('style.background-color') @Input() bgColor!: string;
  @HostBinding('style.border-color') @Input() borderColor!: string;

  @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter')
      this.enterPressed.emit()
  }

  @Output() enterPressed = new EventEmitter()
}
