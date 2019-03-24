import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { PhimApiService } from 'src/app/services/phim-api.service';
import { TransformDataService } from 'src/app/services/transform-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-phim',
  templateUrl: './form-phim.component.html',
  styleUrls: ['./form-phim.component.css']
})
export class FormPhimComponent implements OnInit, AfterViewInit {
  @ViewChild('formP') formPhim: NgForm;

  statusThePhim: boolean = true;
  private subParam: Subscription;

  signUpPhim(form: any) {
    // console.log(form.value)
    form.value.MaNhom = "GP03";
    this._phimApi.ThemPhim(form.value).subscribe(
      (res: any) => {
        if (typeof (res) === "string")
          Swal.fire('Lỗi!', "Phim đã tồn tại", 'error')
        else if (typeof (res) === "object")
          Swal.fire('Chúc mừng!', 'Đăng ký thành công', 'success')
      },
      (err: any) => {
        Swal.fire('Lỗi!', err, 'error')
      }
    )
    // this.formDangKy.reset(); // chỉ reset value
    this.formPhim.resetForm() // reset toàn bô form
    this.router.navigate(['/admin/ql-phim',])
  }

  constructor(
    private _phimApi: PhimApiService,
    private _transform: TransformDataService,
    private router: Router,
    private activateRouter: ActivatedRoute
  ) {
    this.subParam = this.activateRouter.queryParams.subscribe((params) => {

      if (params.status == "edit") {
        this.statusThePhim = false;
      }
      else if (params.status == "add") {
        this.statusThePhim = true;
      }
    })
   }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this._transform.asData.subscribe(
      (res) => {
        console.log(res)
        if (res) {
          setTimeout(() => {
            this.formPhim.setValue({
              MaPhim: res.MaPhim,
              TenPhim: res.TenPhim,
              Trailer: res.Trailer,
              MoTa: res.MoTa,
              NgayKhoiChieu: res.NgayKhoiChieu,
              DanhGia: res.DanhGia,
              HinhAnh: res.HinhAnh,
            })
          }, 0);
        }

      },
      (err) => {
        console.log(err)
      }
    );
  }

}
