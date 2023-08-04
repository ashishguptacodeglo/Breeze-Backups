import { TestBed } from '@angular/core/testing';

import { BreazeAuthGuard } from './breaze-auth.guard';

describe('BreazeAuthGuard', () => {
  let guard: BreazeAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BreazeAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
