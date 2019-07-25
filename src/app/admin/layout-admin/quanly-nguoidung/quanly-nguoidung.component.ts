import { Component, OnInit, ViewChild } from '@angular/core';
import { NguoiDung } from 'src/app/models/nguoidung';
import { NguoidungApiService } from '../../../services/nguoidung-api.service';
import { FromNguoidungComponent } from './from-nguoidung/from-nguoidung.component';
import { StatusService } from 'src/app/services/status.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-quanly-nguoidung',
  templateUrl: './quanly-nguoidung.component.html',
  styleUrls: ['./quanly-nguoidung.component.css']
})
export class QuanlyNguoidungComponent implements OnInit {
  arrDanhSachND: NguoiDung[] = [];
  arrDanhSachTimKiem: NguoiDung[] = [...this.arrDanhSachND];
  ThongTinNguoiDung: NguoiDung;
  currentAdmin: NguoiDung;
  page = 1;
  itemsPerPage = 10;
  index: number;
  @ViewChild('fromNguoiDung') fromNguoiDung: FromNguoidungComponent;
  constructor(private nguoiDungApiService: NguoidungApiService, private status: StatusService) {
    this.currentAdmin = JSON.parse(localStorage.getItem('admin_login'));
  }

  ngOnInit() {
    this.LayDanhSachNguoiDung();
  }
  OpenModalAddUser() {
    console.log('modalAddUser');
    this.status.ChangeStatusEditUser(false);
  }
  LayThongTinNguoiDung(nguoidung: NguoiDung) {
    this.ThongTinNguoiDung = nguoidung;
    console.log(this.ThongTinNguoiDung);
  }
  LayDanhSachNguoiDung() {
    this.nguoiDungApiService.LayDanhSachNguoiDung().subscribe(
      (res: any) => {
        this.arrDanhSachND = res;
        // Trong mảng tìm ra tên admin đăng nhập và xoá tài khoản admin đó ra khỏi list danhsachNguoiDung
        const index = this.arrDanhSachND.findIndex((nguoidung) => {
          return nguoidung.TaiKhoan === this.currentAdmin.TaiKhoan;
        });
        this.arrDanhSachND.splice(index, 1);
      }, (err: any) => {
        console.log(err);
      }
    );
  }

  TimKiemTaiKhoan(e) {
    const taiKhoan = e.target.value.trim().toLowerCase();
    if (taiKhoan.length > 0) {
      this.arrDanhSachTimKiem = this.arrDanhSachND.filter((nguoidung) => {
        return nguoidung.TaiKhoan.trim().toLowerCase().indexOf(taiKhoan) !== -1;
      });
      this.arrDanhSachND = this.arrDanhSachTimKiem;
    } else {
      this.LayDanhSachNguoiDung();
    }
  }
  ThemNguoiDung(nguoidung: NguoiDung) {
    this.nguoiDungApiService.ThemNguoiDung(nguoidung).subscribe(
      (res: any) => {
        if (typeof res === 'object') {
          Swal.fire({
            title: 'Tạo người dùng thành công!',
            type: 'success',
          });
          this.LayDanhSachNguoiDung();
          this.fromNguoiDung.btnCloseModal.nativeElement.click();
        } else if (typeof res === 'string') {
          Swal.fire({
            title: res,
            type: 'error'
          });
        }
      }, (err: any) => {
        console.log(err);
      }
    );
  }
  CapNhatNguoiDung(nguoidung: NguoiDung) {
    console.log(nguoidung);
  }
  OpenModalEditUser() {
    this.status.ChangeStatusEditUser(true);
  }
}
