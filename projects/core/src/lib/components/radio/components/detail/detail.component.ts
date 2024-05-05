import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { InputLabelComponent } from '../../../input-label/input-label.component';

@Component({
  selector: 'ak-radio-detail',
  template: `<ak-input-label [label]="label" />`,
  styleUrls: ['detail.component.scss'],
  standalone: true,
  imports: [InputLabelComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class RadioDetailComponent {

  @Input() label: string = '';

}
