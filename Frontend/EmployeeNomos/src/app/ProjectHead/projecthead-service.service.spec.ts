import { TestBed } from '@angular/core/testing';

import { ProjectheadServiceService } from './projecthead-service.service';

describe('ProjectheadServiceService', () => {
  let service: ProjectheadServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectheadServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
