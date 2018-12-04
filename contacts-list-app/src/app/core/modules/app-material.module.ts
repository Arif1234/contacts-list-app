import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import {
  MatToolbarModule,
  MatButtonToggleModule,
  MatTableModule,
  MatPaginatorModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatChipsModule,
  MatSelectModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatToolbarModule,
    MatButtonToggleModule,
    MatTableModule,
    ScrollingModule,
    MatPaginatorModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatChipsModule,
    MatSelectModule

  ]
})
export class AppMaterialModule { }
