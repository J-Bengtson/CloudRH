import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCandidatoComponent } from './home-candidato.component';

describe('HomeCandidatoComponent', () => {
  let component: HomeCandidatoComponent;
  let fixture: ComponentFixture<HomeCandidatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCandidatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCandidatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
