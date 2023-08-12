import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhchangepasswordComponent } from './phchangepassword.component';

describe('PhchangepasswordComponent', () => {
  let component: PhchangepasswordComponent;
  let fixture: ComponentFixture<PhchangepasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhchangepasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhchangepasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
