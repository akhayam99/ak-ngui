import { NgStyle } from '@angular/common';
import { Component, EventEmitter, HostBinding, HostListener, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { colorContrast, colorFromKey, colorKeyFromTheme } from '../../utils';
import { ToggleSize } from './types/ToggleSize';

@Component({
  selector: 'ak-toggle',
  templateUrl: 'toggle.component.html',
  styleUrls: ['toggle.component.scss'],
  standalone: true,
  imports: [NgStyle]
})

export class ToggleComponent implements OnChanges {

  innerColor: string = 'white';

  @HostBinding('class.is-checked') @Input() value: boolean = false;
  @HostBinding('class') @Input() size: ToggleSize = 'md';
  @HostBinding('style.background-color') toggleColor: string = 'black';

  @HostListener('click') onClickEvent() {
    this.updateValue()
  }

  @Input() color?: string;

  @Output() onChange = new EventEmitter<boolean>();

  ngOnChanges(changes: SimpleChanges): void {
    if (!!changes?.['color'])
      this.updateColors()
  }

  updateValue(): void {
    this.value = !this.value
    this.onChange.emit(this.value)

    this.updateColors()
  }

  updateColors(): void {
    this.toggleColor = this.value
      ? colorFromKey(colorKeyFromTheme(this.color))
      : colorFromKey('cneutral', 3)
    this.innerColor = colorContrast(colorFromKey(colorKeyFromTheme(this.color)))
  }


}
