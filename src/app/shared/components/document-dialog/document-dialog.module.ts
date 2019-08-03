import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentDialogComponent } from './document-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [DocumentDialogComponent],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  exports: [DocumentDialogComponent],
  entryComponents: [
    DocumentDialogComponent
  ]
})
export class DocumentDialogModule { }
