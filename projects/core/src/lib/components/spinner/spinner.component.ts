import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'ak-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  standalone: true,
})

export class SpinnerComponent {

  @HostBinding('attr.role') @Input() role: 'primary' | 'secondary' = 'primary';
  @HostBinding('attr.variant') @Input() variant: 'filled' | 'outlined' = 'filled';

}
