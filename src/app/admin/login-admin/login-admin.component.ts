import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NguoidungApiService  } from '../../services/nguoidung-api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {
  FormLogin: FormGroup;
  constructor(private _nguoiDungApi: NguoidungApiService, private _router: Router) { }

  ngOnInit() {
    this.FormLogin = new FormGroup({
      TaiKhoan: new FormControl(null),
      MatKhau: new FormControl(null)
    });
  }

  DangNhap() {
    let user = this.FormLogin.value;
    this._nguoiDungApi.DangNhap(user.TaiKhoan, user.MatKhau).subscribe(
      (kq: any) => {
        console.log(kq);
        if (typeof(kq) === 'object') {
          if (kq.MaLoaiNguoiDung.toLowerCase() === 'quantri') {
            Swal.fire({
              title: 'Đăng nhập thành công',
              type: 'success'
            }).then((value) => {
              localStorage.setItem('admin_login', JSON.stringify(kq));
              this._router.navigate(['/admin']);
            });
          } else {
            Swal.fire({
              title: ' Người dùng phải là quản trị viên',
              type: 'warning'
            });
          }
        } else {
          Swal.fire({
            type: 'error',
          });
        }
      }
    );
  }
}
