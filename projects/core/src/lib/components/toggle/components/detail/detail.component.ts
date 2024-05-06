import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { InputLabelComponent } from '../../../_common/input-label/input-label.component';

@Component({
  selector: 'ak-toggle-detail',
  templateUrl: 'detail.component.html',
  styleUrls: ['detail.component.scss'],
  standalone: true,
  imports: [InputLabelComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ToggleDetailComponent {
  @Input() label: string = '';
}
