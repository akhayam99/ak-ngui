import { Component, Input } from '@angular/core';

@Component({
  selector: 'ak-toggle-detail',
  templateUrl: 'detail.component.html',
  styleUrls: ['detail.component.scss'],
  standalone: true
})

export class ToggleDetailComponent {
  @Input() label: string = '';
}
