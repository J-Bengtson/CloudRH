import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraVagaComponent } from './cadastra-vaga.component';

describe('CadastraVagaComponent', () => {
  let component: CadastraVagaComponent;
  let fixture: ComponentFixture<CadastraVagaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastraVagaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastraVagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
