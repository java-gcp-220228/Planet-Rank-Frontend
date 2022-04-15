import { TestBed } from '@angular/core/testing';

import { NasaImageApiService } from './nasa-image-api.service';

describe('NasaImageApiService', () => {
  let service: NasaImageApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NasaImageApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
