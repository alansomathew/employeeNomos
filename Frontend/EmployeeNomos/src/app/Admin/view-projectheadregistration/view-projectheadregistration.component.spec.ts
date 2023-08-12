import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProjectheadregistrationComponent } from './view-projectheadregistration.component';

describe('ViewProjectheadregistrationComponent', () => {
  let component: ViewProjectheadregistrationComponent;
  let fixture: ComponentFixture<ViewProjectheadregistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProjectheadregistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProjectheadregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
