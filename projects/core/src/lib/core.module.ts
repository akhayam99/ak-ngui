import { NgModule } from '@angular/core';
import { CoreComponent } from './core.component';
import { ButtonComponent } from './button/button.component';



@NgModule({
  declarations: [
    CoreComponent,
    ButtonComponent
  ],
  imports: [
  ],
  exports: [
    CoreComponent
  ]
})
export class CoreModule { }
