import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Phim } from 'src/app/models/phim';
import { PhimService } from 'src/app/services/phim.service';

@Component({
  selector: 'app-chitietphim',
  templateUrl: './chitietphim.component.html',
  styleUrls: ['./chitietphim.component.css']
})
export class ChitietphimComponent implements OnInit {
  chiTietPhim:Phim = new Phim();
  getLichChieu:any =[];
  public TenPhim:string;
  public MaPhim:string;
  constructor(
    private activated:ActivatedRoute, 
    private PhimSv:PhimService
    ) { }

  ngOnInit() {
    this.activated.params.subscribe(
      (kq:any) => {
        this.MaPhim = kq.id;
        this.TenPhim = kq.tenphim;
        this.PhimSv.getChiTietPhim(this.MaPhim).subscribe(
          (kq:any) => {
            this.chiTietPhim = kq;
            // console.log(this.chiTietPhim);
            let arrLichChieu = this.chiTietPhim.LichChieu;
            // console.log(arrLichChieu);
            this.getLichChieu = arrLichChieu;
            // console.log(this.getLichChieu);
            let arrTrailer = this.chiTietPhim.Trailer.split('watch?v=');
            console.log(arrTrailer);
            this.chiTietPhim.Trailer = arrTrailer[0] + 'embed/' + arrTrailer[1];
          },
          (err:any) => {
            console.log(err);
          }
        )
      },  
    )
  }
  layChiTietPhim() {
  }
}
