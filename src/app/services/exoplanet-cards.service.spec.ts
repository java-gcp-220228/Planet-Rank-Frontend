import { TestBed } from '@angular/core/testing';

import { ExoplanetCardsService } from './exoplanet-cards.service';

describe('ExoplanetCardsService', () => {
  let service: ExoplanetCardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExoplanetCardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
