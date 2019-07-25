import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { PhimAdmin } from 'src/app/models/phimAdmin';

@Component({
  selector: 'app-top-phim',
  templateUrl: './top-phim.component.html',
  styleUrls: ['./top-phim.component.css']
})
export class TopPhimComponent implements OnInit, OnChanges {
  @Input() arrDanhSachPhim: PhimAdmin[];
  arrTopPhim: PhimAdmin[] = [];
  constructor() { }

  ngOnChanges() {
    this.arrTopPhim = this.arrDanhSachPhim.filter((el, index) => {
      if (index < 5 ) {
        return el;
      }
    });
  }
  ngOnInit() {
  }

}
