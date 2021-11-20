import { TestBed } from '@angular/core/testing';

import { BalanceRepositoryService } from './balance-repository.service';

describe('BalanceRepositoryService', () => {
  let service: BalanceRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BalanceRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
