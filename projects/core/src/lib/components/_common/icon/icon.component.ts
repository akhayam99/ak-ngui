import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'ak-icon[name]',
  templateUrl: './icon.component.html',
  styleUrls: ['icon.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf]
})

export class IconComponent {

  @HostBinding('style.fill') @Input() color!: string

  @Input() name!: string
  @Input() size: string = 'md'

}
