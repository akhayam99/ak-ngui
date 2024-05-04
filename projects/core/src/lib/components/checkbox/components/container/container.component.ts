import { NgIf } from '@angular/common';
import { Component, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';
import { CheckboxSize } from '../../types/CheckboxSize';
import { CheckboxContainerIconComponent } from './icon/icon.component';
import { CheckboxContainerInputComponent } from './input/input.component';

@Component({
  selector: 'ak-checkbox-container',
  templateUrl: 'container.component.html',
  styleUrls: ['container.component.scss'],
  standalone: true,
  imports: [
    NgIf,
    CheckboxContainerInputComponent,
    CheckboxContainerIconComponent,
  ]
})

export class CheckboxContainerComponent {

  @HostListener('click') onClick(): void { this.onChange.emit(); }

  @HostBinding('class') @Input() size: CheckboxSize = 'md';

  @Input() isChecked: boolean = false;
  @Input() isIndeterminate: boolean = false;

  @Output() onChange = new EventEmitter();

}
