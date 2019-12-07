import { TestBed } from '@angular/core/testing';

import { ConfiguracoesUsuarioService } from './configuracoes-usuario.service';

describe('ConfiguracoesUsuarioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConfiguracoesUsuarioService = TestBed.get(ConfiguracoesUsuarioService);
    expect(service).toBeTruthy();
  });
});
