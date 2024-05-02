import { NgIf } from '@angular/common';
import { Component, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';
import { SpinnerComponent } from '../spinner/spinner.component';
import { ButtonRole } from './types/role';
import { ButtonSize } from './types/size';
import { ButtonVariant } from './types/variant';

@Component({
  selector: 'button[ak-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: true,
  imports: [
    NgIf,
    SpinnerComponent
  ]
})
export class ButtonComponent {

  @HostBinding('attr.role') @Input() role: ButtonRole = 'primary';
  @HostBinding('attr.size') @Input() size: ButtonSize = 'medium';
  @HostBinding('attr.variant') @Input() variant: ButtonVariant = 'filled';
  @HostBinding('class.is-loading') @Input() loading: boolean = false;
  @HostBinding('class.is-disabled') @Input() disabled: boolean = false;

  @Input() label: string = "BUTTON";

  @HostListener('click') onClickEvent() {
    if (this.disabled || this.loading)
      return
    this.onClick.emit()
  }

  @Output() onClick = new EventEmitter();

}
