import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSecurityqtnComponent } from './view-securityqtn.component';

describe('ViewSecurityqtnComponent', () => {
  let component: ViewSecurityqtnComponent;
  let fixture: ComponentFixture<ViewSecurityqtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSecurityqtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSecurityqtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
