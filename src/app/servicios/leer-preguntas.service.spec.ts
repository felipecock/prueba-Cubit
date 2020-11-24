import { TestBed } from '@angular/core/testing';

import { LeerPreguntasService } from './leer-preguntas.service';

describe('LeerPreguntasService', () => {
  let service: LeerPreguntasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeerPreguntasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
