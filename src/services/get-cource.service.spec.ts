import { TestBed } from '@angular/core/testing';

import { GetCourceService } from './get-cource.service';

describe('GetCourceService', () => {
  let service: GetCourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
