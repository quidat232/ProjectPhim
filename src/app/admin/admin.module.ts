import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuanLyNguoiDungComponent } from './quan-ly-nguoi-dung/quan-ly-nguoi-dung.component';
import { QuanLyPhimComponent } from './quan-ly-phim/quan-ly-phim.component';
import { QuanLyLichChieuComponent } from './quan-ly-lich-chieu/quan-ly-lich-chieu.component';
import { LayoutAdminComponent } from './layout-admin/layout-admin.component';

import { RouterModule, Routes } from '@angular/router'

const adminRoutes :Routes= [
  {path:'admin', component:LayoutAdminComponent},
  {path:'ql-nguoi-dung', component: QuanLyNguoiDungComponent},
  {path:'ql-phim', component: QuanLyPhimComponent},
  {path:'ql-lich-chieu', component: QuanLyLichChieuComponent}
]

@NgModule({
  declarations: [QuanLyNguoiDungComponent,
    QuanLyPhimComponent,
    QuanLyLichChieuComponent,
    LayoutAdminComponent],
  imports: [
    RouterModule.forRoot(adminRoutes),
    CommonModule,
  ],
  exports: [
    LayoutAdminComponent
  ]
})
export class AdminModule { }
