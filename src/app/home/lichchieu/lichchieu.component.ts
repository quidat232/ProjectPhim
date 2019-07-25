import { Component, OnInit } from '@angular/core';
import { Phim } from 'src/app/models/phim';
import { PhimService } from 'src/app/services/phim.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lichchieu',
  templateUrl: './lichchieu.component.html',
  styleUrls: ['./lichchieu.component.css']
})
export class LichchieuComponent implements OnInit {
  lichChieu: Phim[]= [];
  getLichChieu: any = [];
  private paramSub: Subscription;
  public MaPhim: number[];
  constructor(private phimSV: PhimService, private activated: ActivatedRoute) { }

  ngOnInit() {
   this.DanhSachPhim();
   this.setThamSo();
  }
  DanhSachPhim() {
    this.phimSV.getDanhSachPhim().subscribe(
      (kq: any) => {
        this.lichChieu = kq;
        console.log(this.lichChieu);
      });
  }
  setThamSo() {
    this.paramSub = this.activated.queryParams.subscribe(
      (thamso) => {
        this.MaPhim = thamso.MaPhim;
        console.log(this.MaPhim);
        this.phimSV.getChiTietPhim(this.MaPhim).subscribe(
          (res: any) => {
            this.getLichChieu = res;
            console.log(this.getLichChieu);
          }
        );
      }
    );
  }
  ngOndestroy() {
    this.paramSub.unsubscribe();
  }

}
