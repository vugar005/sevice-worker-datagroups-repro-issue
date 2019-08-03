import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavorableRatesPreviewTableComponent } from './favorable-rates-preview-table.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [FavorableRatesPreviewTableComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [FavorableRatesPreviewTableComponent]
})
export class FavorableRatesPreviewTableModule { }
