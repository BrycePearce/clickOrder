import { TestBed } from '@angular/core/testing';

import { RestauarantService } from './restauarant.service';

describe('RestauarantService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestauarantService = TestBed.get(RestauarantService);
    expect(service).toBeTruthy();
  });
});
