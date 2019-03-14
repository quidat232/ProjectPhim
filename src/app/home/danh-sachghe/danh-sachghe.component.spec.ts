import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhSachgheComponent } from './danh-sachghe.component';

describe('DanhSachgheComponent', () => {
  let component: DanhSachgheComponent;
  let fixture: ComponentFixture<DanhSachgheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhSachgheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhSachgheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
