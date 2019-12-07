import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracoesUsuarioComponent } from './configuracoes-usuario.component';

describe('ConfiguracoesUsuarioComponent', () => {
  let component: ConfiguracoesUsuarioComponent;
  let fixture: ComponentFixture<ConfiguracoesUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfiguracoesUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguracoesUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
