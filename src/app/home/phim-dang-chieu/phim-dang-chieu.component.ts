import { Component, OnInit, AfterViewInit } from '@angular/core';
import { $} from 'jquery';
declare var $:any;

@Component({
  selector: 'app-phim-dang-chieu',
  templateUrl: './phim-dang-chieu.component.html',
  styleUrls: ['./phim-dang-chieu.component.css']
})
export class PhimDangChieuComponent implements OnInit,AfterViewInit {
  DanhSachPhimDangChieu =[
    {
      TenPhim:"Hight Phuong",
      HinhAnh:'../../../assets/img/thaybaga.jpg',
      DaoDien:"BaRoiBeo",
      NoiDung:"LOLLLLLLLLLLLLLLLLLL"
    },
    {
      TenPhim:"Ferdinand",
      HinhAnh:'../../../assets/img/ferdinand.jpg',
      DaoDien:"Carlos Saldanha",
      NoiDung:"Ferdinand là bộ phim hoạt hình máy tính 3D hài hước Mỹ năm 2017; do Blue Sky Studios và 20th Century Fox Animation sản xuất"
    },

    {
      TenPhim:"Ngắm Pháo Hoa",
      HinhAnh:'../../../assets/img/phao-hoa-nen-ngam-tu-duoi-hay-ben-canh-15088436147700.jpg',
      DaoDien:"Shinbo Akiyuki, Takeuchi Nobuyuki",
      NoiDung:"Pháo hoa, nên ngắm từ dưới hay bên cạnh? là một anime chính kịch Nhật Bản được xưởng phim Shaft chế tác sản xuất, và Toho là nhà phân phối"
    },
    {
      TenPhim:"Nhóc Ma Siêu Quậy",
      HinhAnh:'../../../assets/img/nhoc-ma-sieu-quay-the-little-vampire-3d-15090331183157.jpg',
      DaoDien:"Richard Claus, Karsten Kiilerich",
      NoiDung:"Nhóc Ma Siêu Quậy dựa trên các nhân vật trong cuốn tiểu thuyết bán chạy nhất của Angela Sommer-Bodenburg, kể về Rudolph, một ma cà rồng mười ba tuổi. Rudolph gặp Tony, người bị mê hoặc bởi thế giới siêu nhiên và ma cà rồng. Tony đã cùng Rudolph phiêu lưu vào thế giới ma thuật với những sinh vật huyền bí và vui nhộn."
    },
    {
      TenPhim:"Trải nghiệm điểm chết",
      HinhAnh:'../../../assets/img/trai-nghiem-diem-chet-flatliners-15093522963475.jpg',
      DaoDien:"Niels Arden Oplev",
      NoiDung:"Năm sinh viên y khoa tham gia vào một thí nghiệm cực kỳ nguy hiểm: Chết lâm sàng để được trải nghiệm cảm giác chu du thế giới bên kia. Đây là trải nghiệm độc đáo có một không hai và nó khiến các chàng trai cô gái trẻ mê mẩn."
    },
  ]

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
