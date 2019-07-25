import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatveThanhcongComponent } from './datve-thanhcong.component';

describe('DatveThanhcongComponent', () => {
  let component: DatveThanhcongComponent;
  let fixture: ComponentFixture<DatveThanhcongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatveThanhcongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatveThanhcongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
