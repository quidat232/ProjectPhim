import { Component, OnInit, Input, OnChanges, SimpleChanges, Output } from '@angular/core';
import { PhimService } from 'src/app/services/phim.service';
import { DatVe } from 'src/app/models/DatVe';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Ve } from 'src/app/models/Ve';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-danh-sachghe',
  templateUrl: './danh-sachghe.component.html',
  styleUrls: ['./danh-sachghe.component.css']
})
export class DanhSachgheComponent implements OnInit,OnChanges {
  @Input() arrayGhe: any[] =[];
  @Output() eventDatVe = new EventEmitter();
  status = false;
  soGheDaDat = 0;
  soGheConLai = 0;
  danhSachGheDangDat = [];
  public MaLichChieu: string;
  constructor(private phimSV: PhimService, private router: Router) { }

  ngOnInit() {
    // for(let ghedaDat of this.arrayGhe) {
    //   this.gheDaDat.DaDat = ghedaDat;
    //   console.log(ghedaDat);
    //   if(!ghedaDat.DaDat) {
    //     return this.soGheConLai++;
    //   }
    // }
  }
  DatGheParent(status,ghe) {
    let ve: {MaGhe:string,TenGhe:string,GiaVe:number } = {
      MaGhe: ghe.MaGhe,
      TenGhe: ghe.TenGhe,
      GiaVe: ghe.GiaVe
    };
    if (status) {
      this.soGheDaDat++;
      this.soGheConLai--;
      this.danhSachGheDangDat.push(ve);
    } else {
      this.soGheDaDat--;
      this.soGheConLai++;
      for(let index in this.danhSachGheDangDat) {
        // tìm ghế đang được huỷ
        if (this.danhSachGheDangDat[index].MaGhe === ghe.MaGhe) {
          // tslint:disable-next-line:radix
          this.danhSachGheDangDat.splice(parseInt(index), 1);
        }
      }
    }
    console.log(ve);
  }
  datVePhim(ghedaDat: Ve) {
    this.eventDatVe.emit(this.danhSachGheDangDat);
    console.log(this.danhSachGheDangDat);
  }
  // ThemGhe(gheduocThem) {
  //   this.arrayGhe.push(gheduocThem);
  // }
  ngOnChanges(change:SimpleChanges) {
    if(this.arrayGhe.length > 0) {
      this.soGheConLai = this.arrayGhe.length;
      for(let ghe of this.arrayGhe) {
        if(ghe.DaDat) {       
          this.soGheConLai--;
        }
      }
      console.log(this.soGheConLai);
    }
  }
}
