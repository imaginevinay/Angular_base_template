import { TestBed } from '@angular/core/testing';

import { SpotifyServicesService } from './spotify-services.service';

describe('SpotifyServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpotifyServicesService = TestBed.get(SpotifyServicesService);
    expect(service).toBeTruthy();
  });
});
