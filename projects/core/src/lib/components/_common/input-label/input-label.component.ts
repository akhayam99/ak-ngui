import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ak-input-label',
  template: '{{ label }}',
  styleUrls: ['input-label.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class InputLabelComponent {
  @Input() label: string = '';
}
