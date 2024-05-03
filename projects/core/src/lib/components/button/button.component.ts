import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, HostListener, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { akTheme } from '../../theme';
import { generateContrastFromColor } from '../../theme/utils';
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
    SpinnerComponent
  ],
})
export class ButtonComponent implements OnChanges {

  private isHover = false
  private isActive = false
  private colorKey = 'cneutral'

  @HostBinding('class.is-disabled') @Input() disabled: boolean = false;
  @HostBinding('class.is-loading') @Input() loading: boolean = false;
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
    this.colorKey = this.updateColorKey()
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

  updateColorKey(): string {
    if (!!this.status)
      return akTheme.status[this.status] || 'cneutral'

    if (!!this.role)
      return akTheme.roles[this.role] || 'cneutral'

    return this.color || 'cneutral'
  }

  updateBg(): string {
    if (this.variant === 'filled')
      return this.isActive ? this.getShade(3) : this.isHover ? this.getShade(4) : this.getShade(5)

    if (this.variant === 'ghost')
      return this.isActive ? this.getShade(1) : this.isHover ? this.getShade(0) : 'transparent'

    return this.isActive ? this.getShade(1) : this.isHover ? this.getShade(0) : 'white'
  }

  updateColor(): string {
    if (this.variant === 'filled')
      return this.isActive ? this.getContrast(this.getShade(3)) : this.isHover ? this.getContrast(this.getShade(4)) : this.getContrast(this.getShade(5))

    return this.isActive ? this.getContrast(this.getShade(1)) : this.isHover ? this.getContrast(this.getShade(0)) : this.getShade(5)
  }

  updateBorder(): string {
    if (this.variant === 'filled')
      return this.getShade(5)

    return this.isActive ? this.getShade(3) : this.isHover ? this.getShade(4) : this.getShade(5)
  }

  getShade(index: number): string {
    return akTheme.colors[this.colorKey]?.[index]
  }

  getContrast(color: string): string {
    return generateContrastFromColor(color)
  }

}
