import { Component, OnInit, Output, EventEmitter, Input, ElementRef, ViewChild } from '@angular/core';
import { StatusService } from 'src/app/services/status.service';
import { NguoiDung } from 'src/app/models/nguoidung';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-from-nguoidung',
  templateUrl: './from-nguoidung.component.html',
  styleUrls: ['./from-nguoidung.component.css']
})
export class FromNguoidungComponent implements OnInit {
  @Input() iNguoiDung: NguoiDung;
  @Output() EventThemNguoiDung = new EventEmitter();
  @Output() EventCapNhatNguoiDung = new EventEmitter();
  @ViewChild('btnCloseModal') btnCloseModal: ElementRef;
  @ViewChild('pass') pass: ElementRef;
  nguoiDung: NguoiDung;
  StatusEditUSer: boolean;
  formNguoiDung: FormGroup;
  constructor(private status: StatusService) {
    // Khởi tạo form
    this.formNguoiDung = new FormGroup({
      'TaiKhoan': new FormControl(null, [Validators.required, Validators.minLength(6), Validators.pattern(/^[a-zA-Z0-9_-]*$/)]),
      'MatKhau': new FormControl( null, [Validators.required, Validators.minLength(8), Validators.pattern(/^\S*$/)]),
      'HoTen': new FormControl(null, Validators.required),
      'Email': new FormControl(null, [Validators.required, Validators.email]),
      'SoDT': new FormControl(null, Validators.pattern(/^[0-9]{9,10}$/)),
      'MaLoaiNguoiDung': new FormControl(null, this.ValidatorSelectTypeUser.bind(this))
    });
  }

  ngOnInit() {
    this.iNguoiDung = {
      TaiKhoan: '',
      MatKhau: '',
      HoTen: '',
      Email: '',
      SoDT: 0,
      MaLoaiNguoiDung: '',
      MaNhom: '',
      TenLoaiNguoiDung: ''
    };
  }
  // validator cho mã loại người dùng
  ValidatorSelectTypeUser(maNguoiDung: FormControl) {
    if ( maNguoiDung.value === null && (maNguoiDung.untouched || maNguoiDung.pristine)) {
      return {'required': true};
    } else if ( maNguoiDung.value !== null && (maNguoiDung.touched || maNguoiDung.dirty)) {
      return null;
    }
  }
  // alias cho form
  f() {
    return this.formNguoiDung.controls;
  }
  // Xử kí sự kiện sumit
  HandleSubmit() {
    if (this.StatusEditUSer) {
      this.CapNhatNguoiDung();
    } else {
      this.ThemNguoiDung();
    }
  }
  ThemNguoiDung() {
    const formValue = this.formNguoiDung.value;
    if (formValue.MaLoaiNguoiDung === 'QuanTri') {
      formValue.TenLoaiNguoiDung = 'Quản Trị';
    } else if (formValue.MaLoaiNguoiDung === 'KhachHang') {
      formValue.TenLoaiNguoiDung = 'Khách Hàng';
    }
    this.EventThemNguoiDung.emit(formValue);
  }
  LayThongTinCanCapNhat() {
    this.formNguoiDung.setValue({
      'TaiKhoan': this.iNguoiDung.TaiKhoan,
      'MatKhau': this.iNguoiDung.MatKhau,
      'HoTen': this.iNguoiDung.HoTen,
      'Email': this.iNguoiDung.Email,
      'SoDT': this.iNguoiDung.SoDT,
      'MaLoaiNguoiDung': this.iNguoiDung.MaLoaiNguoiDung
    });
  }
  CapNhatNguoiDung() {
    this.EventCapNhatNguoiDung.emit(this.formNguoiDung.value);
  }
}
