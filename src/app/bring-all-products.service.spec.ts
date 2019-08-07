import { TestBed } from '@angular/core/testing';

import { BringAllProductsService } from './bring-all-products.service';

describe('BringAllProductsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BringAllProductsService = TestBed.get(BringAllProductsService);
    expect(service).toBeTruthy();
  });
});
