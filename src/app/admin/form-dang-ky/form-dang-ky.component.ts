import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NguoidungApiService } from 'src/app/services/nguoidung-api.service';
import Swal from 'sweetalert2';
import { TransformDataService } from 'src/app/services/transform-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-form-dang-ky',
  templateUrl: './form-dang-ky.component.html',
  styleUrls: ['./form-dang-ky.component.css']
})
export class FormDangKyComponent implements OnInit, AfterViewInit {
  @ViewChild('formDK') formDangKy: NgForm;

  statusTheNguoiDung: boolean = true;
  private subParam: Subscription;

  signUp(form: any) {
    // console.log(form.value)
    form.value.MaNhom = "GP03";
    this._nguoidungApi.ThemNguoiDung(form.value).subscribe(
      (res: any) => {
        if (typeof (res) === "string")
          Swal.fire('Lỗi!', "Người dùng đã tồn tại", 'error')
        else if (typeof (res) === "object")
          Swal.fire('Chúc mừng!', 'Đăng ký thành công', 'success')
      },
      (err: any) => {
        Swal.fire('Lỗi!', err, 'error')
      }
    )
    // this.formDangKy.reset(); // chỉ reset value
    this.formDangKy.resetForm() // reset toàn bô form
    this.router.navigate(['/admin/ql-nguoi-dung',])
  }
  constructor(
    private _nguoidungApi: NguoidungApiService,
    private _transform: TransformDataService,
    private router: Router,
    private activateRouter: ActivatedRoute
  ) {
    this.subParam = this.activateRouter.queryParams.subscribe((params) => {

      if (params.status == "edit") {
        this.statusTheNguoiDung = false;
      }
      else if (params.status == "add") {
        this.statusTheNguoiDung = true;
      }
    })
  }

  ngAfterViewInit() {
    this._transform.asData.subscribe(
      (res) => {
        console.log(res)
        if (res) {
          setTimeout(() => {
            this.formDangKy.setValue({
              TaiKhoan: res.TaiKhoan,
              MatKhau: res.MatKhau,
              HoTen: res.HoTen,
              Email: res.Email,
              SoDT: res.SoDT,
              MaLoaiNguoiDung: res.MaLoaiNguoiDung,
            })
          }, 0);
        }

      },
      (err) => {
        console.log(err)
      }
    );
  }
  ngOnInit() {

  }
}
