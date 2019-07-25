import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FromNguoidungComponent } from './from-nguoidung.component';

describe('FromNguoidungComponent', () => {
  let component: FromNguoidungComponent;
  let fixture: ComponentFixture<FromNguoidungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromNguoidungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromNguoidungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
