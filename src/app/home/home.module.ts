import { NgModule } from '@angular/core';
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

  ],
  imports: [
    CommonModule
  ],
  exports: [
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
    ItemTinTucComponent
  ]
})
export class HomeModule { }
