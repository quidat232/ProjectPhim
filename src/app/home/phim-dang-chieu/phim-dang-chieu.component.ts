import { Component, OnInit, AfterViewInit } from '@angular/core';
import { $} from 'jquery';
import { Phim } from 'src/app/models/phim';
import { PhimService } from 'src/app/services/phim.service';
declare var $:any;

@Component({
  selector: 'app-phim-dang-chieu',
  templateUrl: './phim-dang-chieu.component.html',
  styleUrls: ['./phim-dang-chieu.component.css']
})
export class PhimDangChieuComponent implements OnInit,AfterViewInit {
  DanhSachPhimDangChieu:Phim[] =[];

  constructor(private phimSV:PhimService) { }

  ngOnInit() {
    this.phimSV.getDanhSachPhim().subscribe(
      (kq:any) => {
        console.log(kq);
        this.DanhSachPhimDangChieu = kq;
      },
      (err:any) => {
        console.log(err);
      }
    )
    
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
