import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { NguoiDung } from '../../../models/nguoidung';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {
  @Output() toggleSidebar = new EventEmitter();
  toggleOptionNav = false;
  objAdmin: NguoiDung;
  constructor(private _router: Router) { }

  ngOnInit() {
    this.objAdmin = JSON.parse(localStorage.getItem('admin_login'));
  }

  ThongTinAdmin() {
    this._router.navigate(['/admin/thongtin-admin']);
  }

  DangXuat() {
    Swal.fire({
      title: 'Bạn muốn đăng xuất!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Đăng xuất',
      cancelButtonText: 'Huỷ',
      cancelButtonColor: '#d33',
    }).then((logOut) => {
      if (logOut.value) {
        localStorage.removeItem('admin_login');
        setTimeout(() => {
          this._router.navigate(['/loginAdmin']);
        }, 500);
        Swal.fire({
          title: 'Bạn đã đăng xuất!',
          type: 'success',
        });
      }
    });
  }

  HandleSidebar() {
    console.log('hello');
    this.toggleSidebar.emit(false);
  }
  HandleOptionNav() {
    this.toggleOptionNav = !this.toggleOptionNav;
    console.log(this.toggleOptionNav);
  }
}

