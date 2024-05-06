import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, HostListener, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { colorContrast, colorFromKey, colorKeyFromTheme } from 'projects/core/src/lib/utils';
import { ToggleSize } from '../../types/ToggleSize';
import { ToggleContainerInputComponent } from './input/input.component';
import { ToggleContainerOnOffComponent } from './on-off/on-off.component';
import { ToggleContainerThumbComponent } from './thumb/thumb.component';

@Component({
  selector: 'ak-toggle-container',
  templateUrl: 'container.component.html',
  styleUrls: ['container.component.scss'],
  standalone: true,
  imports: [
    NgIf,
    ToggleContainerOnOffComponent,
    ToggleContainerThumbComponent,
    ToggleContainerInputComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ToggleContainerComponent implements OnChanges {

  isHover: boolean = false;
  thumbColor: string = 'white';
  toggleColor: string = 'black';

  @HostListener('click') onClickEvent() { this.onChange.emit() }
  @HostListener('mouseenter') onMouseEnter() { this.invertHoverState() }
  @HostListener('mouseleave') onMouseLeave() { this.invertHoverState() }

  @Input() color!: string;
  @Input() showIO: boolean = false
  @Input() size: ToggleSize = 'md';
  @Input() value: boolean = false;

  @Output() onChange = new EventEmitter<boolean>();

  ngOnChanges(changes: SimpleChanges): void {
    if (!!changes?.['color'] || !!changes?.['value'])
      this.updateColors()
  }

  invertHoverState(): void {
    this.isHover = !this.isHover
    this.updateColors()
  }

  updateColors(): void {
    this.toggleColor = this.updateToggleColor()
    this.thumbColor = colorContrast(colorFromKey(colorKeyFromTheme(this.color)))
  }

  updateToggleColor(): string {
    return this.value
      ? colorFromKey(colorKeyFromTheme(this.color), this.isHover ? 4 : 5)
      : this.isHover ? colorFromKey(colorKeyFromTheme(this.color), 2) : colorFromKey('gray', 5)
  }

}
