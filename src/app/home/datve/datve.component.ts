import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhimService } from 'src/app/services/phim.service';
import { DatVe } from 'src/app/models/DatVe';
import { Ve } from 'src/app/models/Ve';

@Component({
  selector: 'app-datve',
  templateUrl: './datve.component.html',
  styleUrls: ['./datve.component.css']
})
export class DatveComponent implements OnInit {
  public MaLichChieu:string;
  public DanhSachGheNgoi:any[] = [];
  constructor(
    private activatedRoute:ActivatedRoute, private phimSV:PhimService,private router:Router) { }
  LayTaiKhoanNguoiDung() {
    let nguoiDungHienTai = JSON.parse(localStorage.getItem('nguoiDungDangNhap'));
    if(nguoiDungHienTai != null) {
      return nguoiDungHienTai.TaiKhoan;
    } else {
      alert('Vui lòng đăng nhập để đặt vé');
      return false;
    }
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (kq:any) => {
        this.MaLichChieu = kq.malichchieu;
        this.phimSV.getChiTietPhongVe(this.MaLichChieu).subscribe(
          (kq:any) => {
            console.log(kq);
            this.DanhSachGheNgoi = kq.DanhSachGhe;
            console.log(this.DanhSachGheNgoi);
            
          },
          (err:any) => {
            console.log(err)
          }
        )
      },
      (err) => {
        console.log(err);
      }
    )
  }
  datVePhim(danhSachGheDangDat) {
    if(this.LayTaiKhoanNguoiDung() !== false) {
      let ve = {
        MaLichChieu: this.MaLichChieu,
        TaiKhoanNguoiDung: this.LayTaiKhoanNguoiDung(),
        danhSachVe: danhSachGheDangDat
      }
        console.log(ve);
        this.phimSV.postDatVe(ve).subscribe(
          (kq:any) => {
            console.log(kq)
            this.router.navigate(['/lichsu-giaodich']);
          }
        )
    }
    
  }

}
