import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GheComponent } from './ghe/ghe.component';
import { DanhsachGheComponent } from './danhsach-ghe/danhsach-ghe.component';
import { EditDanhsachGheComponent } from './edit-danhsach-ghe/edit-danhsach-ghe.component';

@NgModule({
  declarations: [GheComponent, DanhsachGheComponent, EditDanhsachGheComponent],
  imports: [
    CommonModule
  ],
  exports: [GheComponent, DanhsachGheComponent, EditDanhsachGheComponent],
})
export class QuantriGheModule { }
