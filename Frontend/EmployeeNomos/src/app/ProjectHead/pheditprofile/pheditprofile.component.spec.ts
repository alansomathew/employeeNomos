import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PheditprofileComponent } from './pheditprofile.component';

describe('PheditprofileComponent', () => {
  let component: PheditprofileComponent;
  let fixture: ComponentFixture<PheditprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PheditprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PheditprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
