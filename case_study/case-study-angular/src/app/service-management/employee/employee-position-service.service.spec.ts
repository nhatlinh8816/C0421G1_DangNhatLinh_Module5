import { TestBed } from '@angular/core/testing';

import { EmployeePositionServiceService } from './employee-position-service.service';

describe('EmployeePositionServiceService', () => {
  let service: EmployeePositionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeePositionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
