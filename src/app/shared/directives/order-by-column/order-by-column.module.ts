import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderByColumnDirective } from './order-by-column.directive';

@NgModule({
  declarations: [OrderByColumnDirective],
  imports: [
    CommonModule
  ],
  exports: [OrderByColumnDirective]
})
export class OrderByColumnModule { }
