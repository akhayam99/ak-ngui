import { NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Input() size: ToggleSize = 'md';
  @Input() value: boolean = false;
  @Input() showOnOff?: boolean;

  @Output() onChange = new EventEmitter<boolean>();

  updateValue(): void {
    this.value = !this.value
    this.onChange.emit(this.value)
  }

}
