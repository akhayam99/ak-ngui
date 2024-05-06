import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InputDetailComponent } from './components/detail/detail.component';

@Component({
  selector: 'ak-input',
  templateUrl: 'input.component.html',
  styleUrls: ['input.component.scss'],
  standalone: true,
  imports: [InputDetailComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class InputComponent {

}
