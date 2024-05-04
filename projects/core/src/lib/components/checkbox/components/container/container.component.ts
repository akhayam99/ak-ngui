import { NgIf } from '@angular/common';
import { Component, EventEmitter, HostBinding, HostListener, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { ColorFromKeyPipe } from 'projects/core/src/lib/pipes';
import { ColorContrastPipe } from 'projects/core/src/lib/pipes/color-contrast.pipe';
import { colorKeyFromTheme } from 'projects/core/src/lib/utils';
import { CheckboxSize } from '../../types/CheckboxSize';
import { CheckboxContainerIconComponent } from './icon/icon.component';
import { CheckboxContainerInputComponent } from './input/input.component';

@Component({
  selector: 'ak-checkbox-container',
  templateUrl: 'container.component.html',
  styleUrls: ['container.component.scss'],
  standalone: true,
  imports: [
    NgIf,
    CheckboxContainerInputComponent,
    CheckboxContainerIconComponent,
    ColorContrastPipe,
    ColorFromKeyPipe,
  ]
})

export class CheckboxContainerComponent implements OnChanges {

  colorKey: string = 'cneutral';
  isHover: boolean = false;

  @HostBinding('class') @Input() size: CheckboxSize = 'md';

  @HostListener('click') onClick(): void { this.onChange.emit(); }
  @HostListener('mouseenter') onMouseEnter() { this.invertHoverState() }
  @HostListener('mouseleave') onMouseLeave() { this.invertHoverState() }


  @Input() isChecked: boolean = false;
  @Input() isIndeterminate: boolean = false;
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
