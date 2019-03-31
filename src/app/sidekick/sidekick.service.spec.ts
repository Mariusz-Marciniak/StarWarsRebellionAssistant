import { TestBed } from '@angular/core/testing';

import { SidekickService } from './sidekick.service';

describe('SidekickService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SidekickService = TestBed.get(SidekickService);
    expect(service).toBeTruthy();
  });
});
