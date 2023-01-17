import { TestBed } from '@angular/core/testing';

import { ProducthttpService } from './producthttp.service';

describe('ProducthttpService', () => {
  let service: ProducthttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProducthttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
