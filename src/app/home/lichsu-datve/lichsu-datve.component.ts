import { Component, OnInit } from '@angular/core';
import { PhimService } from 'src/app/services/phim.service';
import { Ve } from 'src/app/models/Ve';
import { version } from 'punycode';
import { NguoidungApiService } from 'src/app/services/nguoidung-api.service';
import { NguoiDung } from 'src/app/models/nguoidung';
import { AuthService } from 'src/app/guard/auth.service';
import { DanhSachDatVe } from 'src/app/models/DanhSachDatVe';

@Component({
  selector: 'app-lichsu-datve',
  templateUrl: './lichsu-datve.component.html',
  styleUrls: ['./lichsu-datve.component.css']
})
export class LichsuDatveComponent implements OnInit {
  DanhSachVeDaDat:DanhSachDatVe[] = [];
  taikhoan = JSON.parse(localStorage.getItem('nguoiDungDangNhap'));
  constructor(private phimSV:PhimService,
    private nguoiDung:NguoidungApiService,
    private _auth:AuthService) { }
 
  ngOnInit() {
    if(this.taikhoan != null) {
      console.log(this.taikhoan);
      this.phimSV.LayLichSuDatVe(this.taikhoan.TaiKhoan).subscribe(
        (kq:any) => {
          this.DanhSachVeDaDat = kq.DanhSachVeDaDat;
          console.log(this.DanhSachVeDaDat);
        },
        (err:any) => {
          console.log(err);
        }
      )
    }
  }

}
