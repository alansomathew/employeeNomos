import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAcceptedemployeeComponent } from './view-acceptedemployee.component';

describe('ViewAcceptedemployeeComponent', () => {
  let component: ViewAcceptedemployeeComponent;
  let fixture: ComponentFixture<ViewAcceptedemployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAcceptedemployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAcceptedemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
