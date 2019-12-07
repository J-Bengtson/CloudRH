import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizaVagaComponent } from './visualiza-vaga.component';

describe('VisualizaVagaComponent', () => {
  let component: VisualizaVagaComponent;
  let fixture: ComponentFixture<VisualizaVagaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizaVagaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizaVagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
