import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'ak-palette-color',
  template: '',
  styleUrls: ['color.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class PaletteColorComponent {
  @HostBinding('style.background-color') @Input() bgColor!: string;
}
