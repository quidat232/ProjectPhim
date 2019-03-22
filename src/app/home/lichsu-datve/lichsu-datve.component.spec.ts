import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LichsuDatveComponent } from './lichsu-datve.component';

describe('LichsuDatveComponent', () => {
  let component: LichsuDatveComponent;
  let fixture: ComponentFixture<LichsuDatveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LichsuDatveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LichsuDatveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
