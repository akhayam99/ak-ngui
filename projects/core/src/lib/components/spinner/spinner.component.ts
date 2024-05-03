import { NgStyle } from '@angular/common';
import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'ak-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  standalone: true,
  imports: [NgStyle]
})

export class SpinnerComponent {
  @HostBinding('attr.color') @Input() color: string = 'cblue';
}
