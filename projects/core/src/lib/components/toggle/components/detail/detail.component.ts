import { Component, Input } from '@angular/core';
import { InputLabelComponent } from '../../../input-label/input-label.component';

@Component({
  selector: 'ak-toggle-detail',
  templateUrl: 'detail.component.html',
  styleUrls: ['detail.component.scss'],
  standalone: true,
  imports: [InputLabelComponent]
})

export class ToggleDetailComponent {
  @Input() label: string = '';
}
