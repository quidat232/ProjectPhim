import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Phim } from 'src/app/models/phim';

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
