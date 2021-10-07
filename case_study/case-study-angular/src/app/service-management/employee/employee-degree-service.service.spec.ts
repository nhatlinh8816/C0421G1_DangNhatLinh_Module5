import { TestBed } from '@angular/core/testing';

import { EmployeeDegreeServiceService } from './employee-degree-service.service';

describe('EmployeeDegreeServiceService', () => {
  let service: EmployeeDegreeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeDegreeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
