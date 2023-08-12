import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhmyprofileComponent } from './phmyprofile.component';

describe('PhmyprofileComponent', () => {
  let component: PhmyprofileComponent;
  let fixture: ComponentFixture<PhmyprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhmyprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhmyprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
