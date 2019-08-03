import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadMoreDirective } from './read-more.directive';

@NgModule({
  declarations: [ReadMoreDirective],
  imports: [
    CommonModule
  ],
  exports:[ReadMoreDirective]
})
export class ReadMoreModule { }
