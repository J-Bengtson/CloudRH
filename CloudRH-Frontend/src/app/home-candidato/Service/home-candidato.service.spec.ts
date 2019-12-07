import { TestBed } from '@angular/core/testing';

import { HomeCandidatoService } from './home-candidato.service';

describe('HomeCandidatoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HomeCandidatoService = TestBed.get(HomeCandidatoService);
    expect(service).toBeTruthy();
  });
});
