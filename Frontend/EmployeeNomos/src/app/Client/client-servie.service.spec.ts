import { TestBed } from '@angular/core/testing';

import { ClientServieService } from './client-servie.service';

describe('ClientServieService', () => {
  let service: ClientServieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientServieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
