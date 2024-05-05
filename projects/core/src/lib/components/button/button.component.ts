import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, HostListener, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { ColorContrastPipe } from '../../pipes/color-contrast.pipe';
import { colorContrast, colorFromKey, colorKeyFromTheme } from "../../utils";
import { SpinnerComponent } from '../spinner/spinner.component';
import { ButtonSize } from './types/size';
import { ButtonVariant } from './types/variant';

@Component({
  selector: 'button[ak-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgIf,
    SpinnerComponent,
    ColorContrastPipe,
  ],
})
export class ButtonComponent implements OnChanges {

  private isHover = false
  private isActive = false
  private colorKey = 'neutral'

  @HostBinding('class.is-disabled') @Input() disabled: boolean = false;
  @HostBinding('class.is-loading') @Input() loading: boolean = false;
  @HostBinding('class.is-full-width') @Input() fullWidth: boolean = false;
  @HostBinding('class') @Input() size: ButtonSize = 'medium';

  @HostBinding('style.background-color') btnBgColor: string = 'white';
  @HostBinding('style.border-color') btnBorder: string = 'white';
  @HostBinding('style.color') btnColor: string = 'white';

  @HostListener('mousedown') onMouseDown() { this.invertActiveState() }
  @HostListener('document:mouseup') onMouseUp() { !!this.isActive && this.invertActiveState() }

  @HostListener('mouseenter') onMouseEnter() { this.invertHoverState() }
  @HostListener('mouseleave') onMouseLeave() { this.invertHoverState() }

  @Input() color?: string;
  @Input() role?: string;
  @Input() status?: string;
  @Input() label: string = "BUTTON";
  @Input() variant: ButtonVariant = 'filled';

  @HostListener('click') onClickEvent() {
    if (this.disabled || this.loading)
      return
    this.onClick.emit()
  }

  @Output() onClick = new EventEmitter();

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes?.['color'] && !changes?.['role'] && !changes?.['status']) return
    this.colorKey = colorKeyFromTheme(this.status || this.role || this.color || '')
    this.updateButtonStyle()
  }

  invertActiveState() {
    this.isActive = !this.isActive
    this.updateButtonStyle()
  }

  invertHoverState() {
    this.isHover = !this.isHover
    this.updateButtonStyle()
  }

  updateButtonStyle(): void {
    this.btnBgColor = this.updateBg()
    this.btnColor = this.updateColor()
    this.btnBorder = this.updateBorder()
  }

  updateBg(): string {
    if (this.variant === 'filled')
      switch (true) {
        case this.isActive:
          return colorFromKey(this.colorKey, 3)
        case this.isHover:
          return colorFromKey(this.colorKey, 4)
        default:
          return colorFromKey(this.colorKey)
      }

    if (this.variant === 'ghost')
      switch (true) {
        case this.isActive:
          return colorFromKey(this.colorKey, 1)
        case this.isHover:
          return colorFromKey(this.colorKey, 0)
        default:
          return 'transparent'
      }

    switch (true) {
      case this.isActive:
        return colorFromKey(this.colorKey, 1)
      case this.isHover:
        return colorFromKey(this.colorKey, 0)
      default:
        return "#FFFFFF"
    }
  }

  updateColor(): string {
    if (this.variant === 'filled')
      switch (true) {
        case this.isActive:
          return colorContrast(colorFromKey(this.colorKey, 3))
        case this.isHover:
          return colorContrast(colorFromKey(this.colorKey, 4))
        default:
          return colorContrast(colorFromKey(this.colorKey))
      }

    switch (true) {
      case this.isActive:
        return colorContrast(colorFromKey(this.colorKey, 1))
      case this.isHover:
        return colorContrast(colorFromKey(this.colorKey, 0))
      default:
        return colorFromKey(this.colorKey)
    }
  }

  updateBorder(): string {
    if (this.variant !== 'filled')
      return colorFromKey(this.colorKey)

    switch (true) {
      case this.isActive:
        return colorFromKey(this.colorKey, 3)
      case this.isHover:
        return colorFromKey(this.colorKey, 4)
      default:
        return colorFromKey(this.colorKey)
    }
  }
}
