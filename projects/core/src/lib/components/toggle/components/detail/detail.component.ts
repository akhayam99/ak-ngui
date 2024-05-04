import { Component, Input } from '@angular/core';

@Component({
  selector: 'ak-toggle-detail',
  templateUrl: 'detail.component.html',
  standalone: true
})

export class ToggleDetailComponent {
  @Input() description: string = '';
}
