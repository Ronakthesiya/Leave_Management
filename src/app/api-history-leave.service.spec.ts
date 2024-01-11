import { TestBed } from '@angular/core/testing';

import { ApiHistoryLeaveService } from './api-history-leave.service';

describe('ApiHistoryLeaveService', () => {
  let service: ApiHistoryLeaveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiHistoryLeaveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
