import { TestBed } from '@angular/core/testing';

import { VisualizaVagaService } from './visualiza-vaga.service';

describe('VisualizaVagaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VisualizaVagaService = TestBed.get(VisualizaVagaService);
    expect(service).toBeTruthy();
  });
});
