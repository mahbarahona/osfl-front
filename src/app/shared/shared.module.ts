import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MontoPipe } from './pipes/monto/monto.pipe';
import { TextoBrevePipe } from './pipes/texto-breve/texto-breve.pipe';



@NgModule({
  declarations: [
    MontoPipe,
    TextoBrevePipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MontoPipe,
    TextoBrevePipe
  ]
})
export class SharedModule { }
