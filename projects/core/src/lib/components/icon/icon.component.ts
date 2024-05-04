import { ChangeDetectionStrategy, Component, HostBinding, Input, OnChanges } from '@angular/core';
import { IconClass } from './types/IconClass';

@Component({
  selector: 'ak-icon[name]',
  styleUrls: ['icon.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class IconComponent implements OnChanges {

  @Input() name!: string
  @Input() class?: IconClass = 'solid'

  @HostBinding('class') iconClass: string = 'fa-solid fa-check'

  ngOnChanges() {
    this.iconClass = this.updateClass()
  }

  updateClass(): string {
    return `
      fa-${this.class}
      fa-${this.name}
    `
  }

}
