import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MontoPipe } from './pipes/monto/monto.pipe';



@NgModule({
  declarations: [
    MontoPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MontoPipe
  ]
})
export class SharedModule { }
