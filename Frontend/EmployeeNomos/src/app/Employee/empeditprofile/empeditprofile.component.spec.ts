import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpeditprofileComponent } from './empeditprofile.component';

describe('EmpeditprofileComponent', () => {
  let component: EmpeditprofileComponent;
  let fixture: ComponentFixture<EmpeditprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpeditprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpeditprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
