import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteditprofileComponent } from './clienteditprofile.component';

describe('ClienteditprofileComponent', () => {
  let component: ClienteditprofileComponent;
  let fixture: ComponentFixture<ClienteditprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteditprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteditprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
