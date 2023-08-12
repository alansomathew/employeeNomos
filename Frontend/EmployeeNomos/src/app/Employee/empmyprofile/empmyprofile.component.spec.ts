import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpmyprofileComponent } from './empmyprofile.component';

describe('EmpmyprofileComponent', () => {
  let component: EmpmyprofileComponent;
  let fixture: ComponentFixture<EmpmyprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpmyprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpmyprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
