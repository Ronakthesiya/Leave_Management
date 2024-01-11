import { TestBed } from '@angular/core/testing';

import { ApiRequestleaveService } from './api-requestleave.service';

describe('ApiRequestleaveService', () => {
  let service: ApiRequestleaveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiRequestleaveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
