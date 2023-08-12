import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRejectedemployeeComponent } from './view-rejectedemployee.component';

describe('ViewRejectedemployeeComponent', () => {
  let component: ViewRejectedemployeeComponent;
  let fixture: ComponentFixture<ViewRejectedemployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewRejectedemployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRejectedemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
