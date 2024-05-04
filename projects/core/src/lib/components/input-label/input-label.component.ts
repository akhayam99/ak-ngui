import { Component, Input } from '@angular/core';

@Component({
  selector: 'ak-input-label',
  template: '{{ label }}',
  standalone: true,
})

export class InputLabelComponent {
  @Input() label: string = '';
}
