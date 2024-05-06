import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ak-icon-circle-dot',
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"> <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/> </svg>`,
  styleUrls: ['_base.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class IconCircleDotComponent { }
