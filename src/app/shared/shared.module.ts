import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscountPipe } from '../pipes/discount.pipe';



@NgModule({
  declarations: [
    DiscountPipe
  ],


  imports: [
    CommonModule,
   // SharedModule
  ],

  exports: [
    DiscountPipe,
   // SharedModule
  ]
})
export class SharedModule { }
