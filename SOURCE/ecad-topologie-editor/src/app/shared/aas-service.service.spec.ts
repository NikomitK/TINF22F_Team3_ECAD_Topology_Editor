import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http'

import { AasServiceService } from './aas-service.service';

describe('AasServiceService', () => {
  let service: AasServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientModule]});
    service = TestBed.inject(AasServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
