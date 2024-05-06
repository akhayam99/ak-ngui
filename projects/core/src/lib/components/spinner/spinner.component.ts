import { NgStyle } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostBinding, Input, OnChanges, SimpleChanges } from '@angular/core';
import { colorFromKey } from '../../utils';

@Component({
  selector: 'ak-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  standalone: true,
  imports: [
    NgStyle,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class SpinnerComponent implements OnChanges {

  hex: string = ''

  @Input() color?: string;
  @Input() size: number = 18;

  @HostBinding('style.width.px') width: number = this.size;
  @HostBinding('style.height.px') height: number = this.size;

  ngOnChanges(changes: SimpleChanges): void {
    if (!!changes?.['size'])
      this.updateSizes()

    if (!!changes?.['color'])
      this.hex = this.updateColor()
  }

  updateColor(): string {
    if (!this.color)
      return ''

    if (this.color?.includes('var'))
      return this.color

    return colorFromKey(this.color)
  }

  updateSizes(): void {
    this.checkSize()
    this.width = this.size
    this.height = this.size
  }

  checkSize(): void {
    if (this.size < 8)
      this.size = 8

    if (this.size > 100)
      this.size = 100
  }

}
