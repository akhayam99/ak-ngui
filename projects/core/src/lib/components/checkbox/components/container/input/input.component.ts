import { NgIf } from '@angular/common';
import { Component, HostBinding, Input } from '@angular/core';
import { CheckboxSize } from '../../../types/CheckboxSize';

@Component({
  selector: 'input[ak-checkbox-container-input]',
  styleUrls: ['input.component.scss'],
  standalone: true,
  imports: [NgIf]
})

export class CheckboxContainerInputComponent {

  @HostBinding('class') @Input() size: CheckboxSize = 'md';
  @HostBinding('style.background-color') @Input() bgColor!: string;
  @HostBinding('style.border-color') @Input() borderColor!: string;

  @Input() isChecked: boolean = false;
  @Input() isIndeterminate: boolean = false;

}
