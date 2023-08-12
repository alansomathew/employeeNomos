import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientmyprofileComponent } from './clientmyprofile.component';

describe('ClientmyprofileComponent', () => {
  let component: ClientmyprofileComponent;
  let fixture: ComponentFixture<ClientmyprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientmyprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientmyprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
