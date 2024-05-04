import { Component, Input } from '@angular/core';

@Component({
  selector: 'ak-checkbox-detail',
  templateUrl: 'detail.component.html',
  styleUrls: ['detail.component.scss'],
  standalone: true
})

export class CheckboxDetailComponent {
  @Input() label: string = '';
}
