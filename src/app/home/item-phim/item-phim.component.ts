import { Component, OnInit, Input } from '@angular/core';
import { PhimDangChieuComponent } from '../phim-dang-chieu/phim-dang-chieu.component';

@Component({
  selector: 'app-item-phim',
  templateUrl: './item-phim.component.html',
  styleUrls: ['./item-phim.component.css']
})
export class ItemPhimComponent implements OnInit {

  @Input() itemPhim;
  constructor() { }

  ngOnInit() {
  }

}
