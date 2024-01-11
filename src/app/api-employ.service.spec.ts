import { TestBed } from '@angular/core/testing';

import { ApiEmployService } from './api-employ.service';

describe('ApiEmployService', () => {
  let service: ApiEmployService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiEmployService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
