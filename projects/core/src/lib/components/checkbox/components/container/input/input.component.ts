import { NgIf } from '@angular/common';
import { Component, HostBinding, Input } from '@angular/core';
import { CheckboxSize } from '../../../types/CheckboxSize';

@Component({
  selector: 'input[ak-checkbox-container-input]',
  templateUrl: 'input.component.html',
  styleUrls: ['input.component.scss'],
  standalone: true,
  imports: [NgIf]
})

export class CheckboxContainerInputComponent {

  @HostBinding('class') @Input() size: CheckboxSize = 'md';

  @Input() isChecked: boolean = false;
  @Input() isIndeterminate: boolean = false;

}
