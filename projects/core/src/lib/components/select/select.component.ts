import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SelectDetailComponent } from './components/detail/detail.component';

@Component({
  selector: 'ak-select',
  templateUrl: 'select.component.html',
  styleUrls: ['select.component.scss'],
  standalone: true,
  imports: [SelectDetailComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class SelectComponent {

}
