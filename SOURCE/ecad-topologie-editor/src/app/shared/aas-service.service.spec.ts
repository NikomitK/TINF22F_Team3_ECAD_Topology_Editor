import { TestBed } from '@angular/core/testing';

import { AasServiceService } from './aas-service.service';

describe('AasServiceService', () => {
  let service: AasServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AasServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
