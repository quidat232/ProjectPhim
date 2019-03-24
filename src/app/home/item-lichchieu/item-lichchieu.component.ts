import { Component, OnInit, Input } from '@angular/core';
import { Phim } from 'src/app/models/phim';
import { ActivatedRoute } from '@angular/router';
import { PhimService } from 'src/app/services/phim.service';

@Component({
  selector: 'app-item-lichchieu',
  templateUrl: './item-lichchieu.component.html',
  styleUrls: ['./item-lichchieu.component.css']
})
export class ItemLichchieuComponent implements OnInit {
  @Input() itemLichChieu;
  constructor() { }

  ngOnInit() {
  
  }

}
