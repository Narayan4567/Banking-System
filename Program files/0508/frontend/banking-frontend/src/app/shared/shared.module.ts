import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaskAccountPipe } from '../mask-account-pipe';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaskAccountPipe
  ],
  exports: [
    CommonModule,
    FormsModule,
    MaskAccountPipe
  ]
})
export class SharedModule { }