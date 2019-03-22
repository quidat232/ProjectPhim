import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { LoaiphimComponent } from './loaiphim/loaiphim.component';
import { PhimDangChieuComponent } from './phim-dang-chieu/phim-dang-chieu.component';
import { PhimSapChieuComponent } from './phim-sap-chieu/phim-sap-chieu.component';
import { ItemPhimComponent } from './item-phim/item-phim.component';
import { TintucComponent } from './tintuc/tintuc.component';
import { DienAnhComponent } from './dien-anh/dien-anh.component';
import { ReViewComponent } from './re-view/re-view.component';
import { KhuyenMaiComponent } from './khuyen-mai/khuyen-mai.component';
import { LienheComponent } from './lienhe/lienhe.component';
import { FormlienheComponent } from './formlienhe/formlienhe.component';
import { ThongTinLienHeComponent } from './thong-tin-lien-he/thong-tin-lien-he.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { ItemTinTucComponent } from './item-tin-tuc/item-tin-tuc.component';
import { LayoutHomeComponent } from './layout-home/layout-home.component';
import {RouterModule,Routes} from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DanhSachgheComponent } from './danh-sachghe/danh-sachghe.component';
import { GheComponent } from './ghe/ghe.component';
import { EditDanhsachGheComponent } from './edit-danhsach-ghe/edit-danhsach-ghe.component';
import { LichchieuComponent } from './lichchieu/lichchieu.component';
import { DangkiThanhcongComponent } from './dangki-thanhcong/dangki-thanhcong.component';
import { ChitietphimComponent } from './chitietphim/chitietphim.component';
import { PipeModule } from '../pipe/pipe.module';
import { LoginGuard } from '../guard/login.guard';
import { DatveComponent } from './datve/datve.component';
import { LichsuDatveComponent } from './lichsu-datve/lichsu-datve.component';




const homeRoutes :Routes= [
  {path:'', component:LayoutHomeComponent, children: [
    {path:'trang-chu', component:TrangchuComponent},
    {path:'', component:TrangchuComponent},
    {path:'dang-nhap', component: SigninComponent},
    {path:'dang-ky', component: SignUpComponent},
    {path:'chi-tiet/:id/:tenphim', component:ChitietphimComponent, canActivate:[LoginGuard]},
    {path:'SignUp-success', component: DangkiThanhcongComponent},
    {path:'lich-chieu', component: LichchieuComponent},
    {path:'dat-ve/:malichchieu', component: DatveComponent},
    {path:'lichsu-giaodich', component: LichsuDatveComponent}
  ]},
]

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    LoaiphimComponent,
    PhimDangChieuComponent,
    PhimSapChieuComponent,
    ItemPhimComponent,
    TintucComponent,
    DienAnhComponent,
    ReViewComponent,
    KhuyenMaiComponent,
    LienheComponent,
    FormlienheComponent,
    ThongTinLienHeComponent,
    TrangchuComponent,
    ItemTinTucComponent,
    SigninComponent,
    LayoutHomeComponent,
    SignUpComponent,
    DanhSachgheComponent,
    GheComponent,
    EditDanhsachGheComponent,
    LichchieuComponent,
    DangkiThanhcongComponent,
    ChitietphimComponent,
    DatveComponent,
    LichsuDatveComponent
  ],
  imports: [
    RouterModule.forRoot(homeRoutes),
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PipeModule
  ],
  exports: [
    // HeaderComponent,
    // FooterComponent,
    // SliderComponent,
    // LoaiphimComponent,
    // PhimDangChieuComponent,
    // PhimSapChieuComponent,
    // ItemPhimComponent,
    // TintucComponent,
    // DienAnhComponent,
    // ReViewComponent,
    // KhuyenMaiComponent,
    // LienheComponent,
    // FormlienheComponent,
    // ThongTinLienHeComponent,
    TrangchuComponent,
    // ItemTinTucComponent,
    SigninComponent,
    LayoutHomeComponent,
    SignUpComponent,
    GheComponent,
    DanhSachgheComponent,
    EditDanhsachGheComponent,
    LichchieuComponent
  ]
})
export class HomeModule { }
