import { NgStyle } from '@angular/common';
import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { ToggleContainerComponent } from './components/container/container.component';
import { ToggleDetailComponent } from './components/detail/detail.component';
import { ToggleSize } from './types/ToggleSize';

@Component({
  selector: 'ak-toggle',
  templateUrl: 'toggle.component.html',
  styleUrls: ['toggle.component.scss'],
  standalone: true,
  imports: [
    NgStyle,
    ToggleContainerComponent,
    ToggleDetailComponent,
  ]
})

export class ToggleComponent {

  @Input() color: string = 'cneutral';
  @Input() label: string = '';
  @Input() showOnOff?: boolean;
  @Input() size: ToggleSize = 'md';
  @Input() value: boolean = false;

  @HostBinding('class') @Input() labelPosition: 'left' | 'right' = 'right';

  @Output() onChange = new EventEmitter<boolean>();

  updateValue(): void {
    this.value = !this.value
    this.onChange.emit(this.value)
  }

}
