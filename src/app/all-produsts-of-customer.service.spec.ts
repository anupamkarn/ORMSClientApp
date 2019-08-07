import { TestBed } from '@angular/core/testing';

import { AllProdustsOfCustomerService } from './all-produsts-of-customer.service';

describe('AllProdustsOfCustomerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllProdustsOfCustomerService = TestBed.get(AllProdustsOfCustomerService);
    expect(service).toBeTruthy();
  });
});
