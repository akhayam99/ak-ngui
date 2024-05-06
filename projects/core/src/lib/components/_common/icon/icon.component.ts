import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { IconCheckComponent } from './svg/check.component';
import { IconCircleDotComponent } from './svg/circle-dot.component';
import { IconMinusComponent } from './svg/minus.component';

@Component({
  selector: 'ak-icon[name]',
  templateUrl: './icon.component.html',
  styleUrls: ['icon.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    IconCheckComponent,
    IconCircleDotComponent,
    IconMinusComponent,
    NgIf,
  ]
})

export class IconComponent {

  @HostBinding('style.fill') @Input() color!: string
  @HostBinding('class') @Input() size: string = 'md'

  @Input() name!: string

}
