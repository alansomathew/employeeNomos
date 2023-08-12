import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectheadRegistrationComponent } from './projecthead-registration.component';

describe('ProjectheadRegistrationComponent', () => {
  let component: ProjectheadRegistrationComponent;
  let fixture: ComponentFixture<ProjectheadRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectheadRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectheadRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
