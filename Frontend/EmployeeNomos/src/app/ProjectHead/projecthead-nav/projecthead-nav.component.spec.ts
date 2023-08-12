import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectheadNavComponent } from './projecthead-nav.component';

describe('ProjectheadNavComponent', () => {
  let component: ProjectheadNavComponent;
  let fixture: ComponentFixture<ProjectheadNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectheadNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectheadNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
