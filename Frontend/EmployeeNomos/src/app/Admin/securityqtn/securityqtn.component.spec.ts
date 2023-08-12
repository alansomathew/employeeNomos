import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityqtnComponent } from './securityqtn.component';

describe('SecurityqtnComponent', () => {
  let component: SecurityqtnComponent;
  let fixture: ComponentFixture<SecurityqtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecurityqtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityqtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
