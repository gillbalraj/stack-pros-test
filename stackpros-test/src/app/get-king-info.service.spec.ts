import { TestBed } from '@angular/core/testing';

import { GetKingInfoService } from './get-king-info.service';

describe('GetKingIngoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetKingInfoService = TestBed.get(GetKingInfoService);
    expect(service).toBeTruthy();
  });
});
