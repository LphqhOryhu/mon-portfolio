import { TestBed } from '@angular/core/testing';

import { VeilleService } from './veille.service';

describe('VeilleService', () => {
  let service: VeilleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VeilleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
