import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { InputLabelComponent } from '../../../_common/input-label/input-label.component';

@Component({
  selector: 'ak-select-detail',
  template: `<ak-input-label [label]="label" />`,
  styleUrls: ['detail.component.scss'],
  standalone: true,
  imports: [InputLabelComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class SelectDetailComponent {

  @Input() label: string = '';

}
