import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuanLyNguoiDungComponent } from './quan-ly-nguoi-dung/quan-ly-nguoi-dung.component';
import { QuanLyPhimComponent } from './quan-ly-phim/quan-ly-phim.component';
import { QuanLyLichChieuComponent } from './quan-ly-lich-chieu/quan-ly-lich-chieu.component';
import { LayoutAdminComponent } from './layout-admin/layout-admin.component';

import { RouterModule, Routes } from '@angular/router';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { FormDangKyComponent } from './form-dang-ky/form-dang-ky.component'
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { LoginGuard } from '../guard/login.guard';
import { AdminGuard } from '../guard/admin.guard';
import { PipeModule } from '../pipe/pipe.module';
import { FormPhimComponent } from './form-phim/form-phim.component';

const adminRoutes :Routes = [
  {path:'admin', component:LayoutAdminComponent, children: [
    {path:'ql-nguoi-dung', component: QuanLyNguoiDungComponent},
    {path:'dk-nguoi-dung', component: FormDangKyComponent},
    {path:'ql-phim', component: QuanLyPhimComponent},
    {path:'ql-lich-chieu', component: QuanLyLichChieuComponent},
    {path:'dk-phim', component: FormPhimComponent}
  ], canActivate: [LoginGuard, AdminGuard] },

]

@NgModule({
  declarations: [
    QuanLyNguoiDungComponent,
    QuanLyPhimComponent,
    QuanLyLichChieuComponent,
    LayoutAdminComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    FormDangKyComponent,
    FormPhimComponent],
  imports: [
    RouterModule.forChild(adminRoutes),
    CommonModule,
    FormsModule,
    NgxPaginationModule,
    PipeModule
  ],
  exports: [
    LayoutAdminComponent,
    FormsModule
  ]
})
export class AdminModule { }
