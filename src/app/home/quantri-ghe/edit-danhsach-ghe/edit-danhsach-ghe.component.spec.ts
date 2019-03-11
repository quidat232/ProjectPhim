import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDanhsachGheComponent } from './edit-danhsach-ghe.component';

describe('EditDanhsachGheComponent', () => {
  let component: EditDanhsachGheComponent;
  let fixture: ComponentFixture<EditDanhsachGheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDanhsachGheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDanhsachGheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
