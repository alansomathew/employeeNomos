import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpchangePasswordComponent } from './empchange-password.component';

describe('EmpchangePasswordComponent', () => {
  let component: EmpchangePasswordComponent;
  let fixture: ComponentFixture<EmpchangePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpchangePasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpchangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
