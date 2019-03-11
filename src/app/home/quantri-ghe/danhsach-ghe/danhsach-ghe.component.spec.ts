import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhsachGheComponent } from './danhsach-ghe.component';

describe('DanhsachGheComponent', () => {
  let component: DanhsachGheComponent;
  let fixture: ComponentFixture<DanhsachGheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhsachGheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhsachGheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
