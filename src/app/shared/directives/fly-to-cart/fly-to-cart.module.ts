import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlyToCartDirective } from './fly-to-cart.directive';

@NgModule({
  declarations: [FlyToCartDirective],
  imports: [
    CommonModule
  ],
  exports: [FlyToCartDirective]
})
export class FlyToCartModule { }
