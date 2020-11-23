import { TestBed } from '@angular/core/testing';

import { EstadoActualService } from './estado-actual.service';

describe('EstadoActualService', () => {
  let service: EstadoActualService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstadoActualService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
