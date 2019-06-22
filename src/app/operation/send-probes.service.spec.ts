import { TestBed } from '@angular/core/testing';

import { SendProbesService } from './send-probes.service';

describe('SendProbesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SendProbesService = TestBed.get(SendProbesService);
    expect(service).toBeTruthy();
  });
});
