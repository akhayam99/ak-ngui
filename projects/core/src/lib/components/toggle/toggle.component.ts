import { NgStyle } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
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
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ToggleComponent {

  @Input() color: string = 'gray';
  @Input() label: string = '';
  @Input() showIO?: boolean;
  @Input() size: ToggleSize = 'md';
  @Input() value: boolean = false;

  @HostBinding('class') @Input() labelPosition: 'left' | 'right' = 'right';

  @Output() onChange = new EventEmitter<boolean>();

  updateValue(): void {
    this.value = !this.value
    this.onChange.emit(this.value)
  }

}
