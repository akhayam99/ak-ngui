import { NgIf } from '@angular/common';
import { AfterViewInit, Component, ElementRef, EventEmitter, HostBinding, Input, Output, ViewChild, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IconComponent } from '../../../_common/icon/icon.component';

@Component({
  selector: 'ak-input-container',
  templateUrl: 'container.component.html',
  styleUrls: ['container.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    IconComponent,
    NgIf
  ]
})

export class InputContainerComponent implements AfterViewInit {

  elementRef = inject(ElementRef)
  beforeExists = false
  afterExists = false

  @HostBinding('class.is-focus') focus: boolean = false
  @HostBinding('class') @Input() size!: string;

  @Input() validChars: RegExp[] = [/[a-zA-Z]/, /[0-9]/, /\W/]
  @Input() value: string = ''

  @Output() valueChange = new EventEmitter<string>()

  @ViewChild('input', { static: true }) input!: ElementRef<HTMLInputElement>

  ngAfterViewInit() {
    this.beforeExists = !!this.elementRef.nativeElement.querySelector('[before-input]')
    this.afterExists = !!this.elementRef.nativeElement.querySelector('[after-input]')
  }

  invertFocus(): void {
    this.focus = !this.focus
  }

  onKeydown(event: KeyboardEvent): void {
    if (!this.validChars.some(regex => regex.test(event.key)))
      event.preventDefault()
  }

}
