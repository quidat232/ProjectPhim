import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DangkiThanhcongComponent } from './dangki-thanhcong.component';

describe('DangkiThanhcongComponent', () => {
  let component: DangkiThanhcongComponent;
  let fixture: ComponentFixture<DangkiThanhcongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DangkiThanhcongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DangkiThanhcongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
