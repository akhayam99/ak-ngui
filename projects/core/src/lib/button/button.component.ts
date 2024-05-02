import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'button[ak-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: true
})
export class ButtonComponent {
  @Input() label: string = "Button";
  @Output() onClick = new EventEmitter();
}
