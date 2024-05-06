import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, HostListener, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { ColorFromKeyPipe } from 'projects/core/src/lib/pipes';
import { ColorContrastPipe } from 'projects/core/src/lib/pipes/color-contrast.pipe';
import { colorKeyFromTheme } from 'projects/core/src/lib/utils';
import { RadioSize } from '../../types/RadioSize';
import { RadioContainerIconComponent } from './icon/icon.component';
import { RadioContainerInputComponent } from './input/input.component';

@Component({
  selector: 'ak-radio-container',
  templateUrl: 'container.component.html',
  styleUrls: ['container.component.scss'],
  standalone: true,
  imports: [
    NgIf,
    RadioContainerInputComponent,
    RadioContainerIconComponent,
    ColorContrastPipe,
    ColorFromKeyPipe,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class RadioContainerComponent implements OnChanges {

  colorKey: string = 'gray';
  isHover: boolean = false;

  @HostBinding('class') @Input() size: RadioSize = 'md';

  @HostListener('click') onClick(): void { this.onChange.emit(); }
  @HostListener('mouseenter') onMouseEnter() { this.invertHoverState() }
  @HostListener('mouseleave') onMouseLeave() { this.invertHoverState() }


  @Input() isChecked: boolean = false;
  @Input() color!: string;

  @Output() onChange = new EventEmitter();

  ngOnChanges(changes: SimpleChanges): void {
    if (!!changes?.['color'])
      this.updateColor()
  }

  updateColor(): void {
    this.colorKey = colorKeyFromTheme(this.color)
  }

  invertHoverState(): void {
    this.isHover = !this.isHover
  }

}
