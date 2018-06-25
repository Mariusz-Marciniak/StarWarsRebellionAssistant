import { TestBed, inject } from '@angular/core/testing';

import { GameSetupService } from './game-setup.service';

describe('GameSetupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameSetupService]
    });
  });

  it('should be created', inject([GameSetupService], (service: GameSetupService) => {
    expect(service).toBeTruthy();
  }));
});
