import { NgStyle } from '@angular/common';
import { Component, HostBinding, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'ak-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  standalone: true,
  imports: [NgStyle]
})

export class SpinnerComponent implements OnChanges {

  @HostBinding('attr.color') @Input() color: string = 'cblue';
  @HostBinding('attr.variant') @Input() variant: 'filled' | 'outlined' = 'filled';

  colorValue: string = `--ak-${this.color}-5`;

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes?.['color']) return
    this.colorValue = `var(--ak-${this.color}-5)`
  }
}
