import { Component, OnInit, AfterViewInit } from '@angular/core';
import { $} from 'jquery';
declare var $:any;

@Component({
  selector: 'app-phim-sap-chieu',
  templateUrl: './phim-sap-chieu.component.html',
  styleUrls: ['./phim-sap-chieu.component.css']
})
export class PhimSapChieuComponent implements OnInit,AfterViewInit {

  DanhSachPhimSapChieu = [
    {
      TenPhim:"Thor: Ragnarok",
      HinhAnh:'../../../assets/img/thor-ragnarok-15088151416399.jpg',
      DaoDien:"Taika Waititi",
      NoiDung:"Thor: Ragnarok là một bộ phim siêu anh hùng ra mắt vào năm 2017 của Mỹ do Marvel Studios sản xuất và Walt Disney Studios Motion Pictures phân phối. Bộ phim là phần tiếp theo của Thor và Thor: The Dark World và là bộ phim thứ mười bảy trong Vũ trụ Điện ảnh Marvel"
    },
    {
      TenPhim:"Pokemon",
      HinhAnh:'../../../assets/img/pokemon-to-chon-cau-pokemon-i-choose-you-15095249219579.jpg',
      DaoDien:" Yuyama Kunihiko",
      NoiDung:"Pokémon: Tớ chọn cậu là phim anime 2017 được sản xuất bởi OLM. Tập phim được làm lại từ tập đầu tiên"
    },
    {
      TenPhim:"Trùm Hương Cảng",
      HinhAnh:'../../../assets/img/trum-huong-cang-chasing-the-dragon-15088270130890.jpg',
      DaoDien:" Vương Tinh, Quan Tri Diệu",
      NoiDung:"Chasing the Dragon, trước đây được gọi là Vua buôn ma túy, là một bộ phim truyền hình tội phạm hành động Hồng Kông-Trung Quốc của đạo diễn Wong Jing và Jason Kwan"
    },
    {
      TenPhim:"Ferdinand",
      HinhAnh:'../../../assets/img/ferdinand.jpg',
      DaoDien:"Carlos Saldanha",
      NoiDung:"Ferdinand là bộ phim hoạt hình máy tính 3D hài hước Mỹ năm 2017; do Blue Sky Studios và 20th Century Fox Animation sản xuất"
    },
    {
      TenPhim:"Hight Phuong",
      HinhAnh:'../../../assets/img/thaybaga.jpg',
      DaoDien:"BaRoiBeo",
      NoiDung:"LOLLLLLLLLLLLLLLLLLL"
    },
  ];

  constructor() { }

  ngOnInit() {
    
  }
  ngAfterViewInit() {
    $('.owl-carousel').owlCarousel ({
      loop: true,
      margin: 10,
      nav:true,
      responsive: {
        0: {
          item:1
        },
        600:{
          item:3
        },
        1000: {
          item:5
        }
      }
    })
  }
}
