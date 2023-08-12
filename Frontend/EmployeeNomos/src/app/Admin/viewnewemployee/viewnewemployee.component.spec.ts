import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewnewemployeeComponent } from './viewnewemployee.component';

describe('ViewnewemployeeComponent', () => {
  let component: ViewnewemployeeComponent;
  let fixture: ComponentFixture<ViewnewemployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewnewemployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewnewemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
