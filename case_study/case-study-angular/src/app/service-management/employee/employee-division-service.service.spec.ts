import { TestBed } from '@angular/core/testing';

import { EmployeeDivisionServiceService } from './employee-division-service.service';

describe('EmployeeDivisionServiceService', () => {
  let service: EmployeeDivisionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeDivisionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
