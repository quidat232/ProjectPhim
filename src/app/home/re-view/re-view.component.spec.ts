import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReViewComponent } from './re-view.component';

describe('ReViewComponent', () => {
  let component: ReViewComponent;
  let fixture: ComponentFixture<ReViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
