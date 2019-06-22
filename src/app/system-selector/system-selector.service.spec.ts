import { TestBed } from '@angular/core/testing';

import { SystemSelectorService } from './system-selector.service';

describe('SystemSelectorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SystemSelectorService = TestBed.get(SystemSelectorService);
    expect(service).toBeTruthy();
  });
});
