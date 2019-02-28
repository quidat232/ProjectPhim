import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaiphimComponent } from './loaiphim.component';

describe('LoaiphimComponent', () => {
  let component: LoaiphimComponent;
  let fixture: ComponentFixture<LoaiphimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoaiphimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaiphimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
