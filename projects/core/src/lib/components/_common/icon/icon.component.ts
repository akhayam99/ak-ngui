import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { SVG_ICON_COMPONENTS } from './svg';

@Component({
  selector: 'ak-icon[name]',
  templateUrl: './icon.component.html',
  styleUrls: ['icon.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ...SVG_ICON_COMPONENTS,
    NgIf,
  ]
})

export class IconComponent {

  @HostBinding('style.fill') @Input() color!: string
  @HostBinding('class') @Input() size: string = 'md'

  @Input() name!: string

}
