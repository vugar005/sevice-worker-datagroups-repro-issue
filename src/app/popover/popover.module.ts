import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopoverComponent } from './popover.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { Popover } from './popover.service';

@NgModule({
  declarations: [PopoverComponent],
  imports: [
    CommonModule,
    OverlayModule,
  ],
  exports:[PopoverComponent],
  entryComponents: [PopoverComponent],
  providers: [Popover]
})
export class PopoverModule { }
