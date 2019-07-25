import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-layout-admin',
  templateUrl: './layout-admin.component.html',
  styleUrls: ['./layout-admin.component.css']
})
export class LayoutAdminComponent implements OnInit {
  // tslint:disable-next-line:variable-name
  sidebarStatus: boolean;
  // tslint:disable-next-line:variable-name
  winWidth: number = window.innerHeight;
  constructor() { }

  ngOnInit() {

  }

  // hàm ẩn hiện sidebar
  handleSidebar(value: any) {
    if (typeof value === 'boolean') {
      console.log(value);
      if (this.sidebarStatus === true) {
        this.sidebarStatus = value;
      } else {
        this.sidebarStatus = !value;
      }
    } else if (typeof value === 'number') {
      if (value <= 768) {
        this.sidebarStatus = false;
      } else {
        this.sidebarStatus = true;
      }
    }
  }
}
