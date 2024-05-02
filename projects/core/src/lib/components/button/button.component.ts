import { Component, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';
import { ButtonRole } from './types/role';
import { ButtonSize } from './types/size';
import { ButtonVariant } from './types/variant';

// LoadThings({})

@Component({
  selector: 'button[ak-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: true,
})
export class ButtonComponent {

  @HostBinding('attr.role') @Input() role: ButtonRole = 'primary';
  @HostBinding('attr.size') @Input() size: ButtonSize = 'medium';
  @HostBinding('attr.variant') @Input() variant: ButtonVariant = 'filled';

  @Input() label: string = "Button";

  @HostListener('click') onClickEvent() { this.onClick.emit() }

  @Output() onClick = new EventEmitter();

}
