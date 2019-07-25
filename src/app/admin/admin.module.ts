import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { Routes, RouterModule } from '@angular/router';


import { LayoutAdminComponent } from './layout-admin/layout-admin.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { AdminLoginGuard } from '../guard/admin-login.guard';
import { TrangChuAdminComponent } from './layout-admin/trang-chu-admin/trang-chu-admin.component';
import { SidebarComponent } from './layout-admin/sidebar/sidebar.component';
import { TopNavComponent } from './layout-admin/top-nav/top-nav.component';
import { InfoAdminComponent } from './layout-admin/info-admin/info-admin.component';
import { QuanlyLichchieuComponent } from './layout-admin/quanly-lichchieu/quanly-lichchieu.component';
import { QuanlyNguoidungComponent } from './layout-admin/quanly-nguoidung/quanly-nguoidung.component';
import { QuanlyPhimComponent } from './layout-admin/quanly-phim/quanly-phim.component';
import { DsLichchieuComponent } from './layout-admin/quanly-lichchieu/ds-lichchieu/ds-lichchieu.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { ThongKeComponent } from './layout-admin/trang-chu-admin/thong-ke/thong-ke.component';
import { TopPhimComponent } from './layout-admin/trang-chu-admin/top-phim/top-phim.component';
import { FromNguoidungComponent } from './layout-admin/quanly-nguoidung/from-nguoidung/from-nguoidung.component';



const adminRoutes: Routes = [
  {path: 'loginAdmin', component: LoginAdminComponent },

  {path: 'admin', component: LayoutAdminComponent, canActivate: [AdminLoginGuard] , children: [
    {path: '', component: TrangChuAdminComponent},
    {path: 'thongtin-admin', component: InfoAdminComponent},
    {path: 'quanly-nguoidung', component: QuanlyNguoidungComponent},
    {path: 'quanly-phim', component: QuanlyPhimComponent},
    {path: 'quanly-lichchieu', component: QuanlyLichchieuComponent},
    // {path: 'danhsach-lichchieu/:id', component: DsLichchieuComponent},
  ] },
  {path: '404', component: NotFoundComponent}

];

@NgModule({
  declarations: [
    LayoutAdminComponent,
    LoginAdminComponent,
    TrangChuAdminComponent,
    SidebarComponent,
    TopNavComponent,
    InfoAdminComponent,
    QuanlyLichchieuComponent,
    QuanlyNguoidungComponent,
    QuanlyPhimComponent,
    ThongKeComponent,
    TopPhimComponent,
    FromNguoidungComponent,
  ],
  imports: [
    RouterModule.forChild(adminRoutes),
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    NgxPaginationModule
  ],
})
export class AdminModule { }
