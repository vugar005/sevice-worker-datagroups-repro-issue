import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonToggleComponent } from './button-toggle.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ButtonToggleComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule
  ],
  exports:[ButtonToggleComponent]
})
export class ButtonToggleModule { }
