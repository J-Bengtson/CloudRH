import { Component, OnInit } from '@angular/core';
import { HomeCandidatoService } from './Service/home-candidato.service';
import { Candidato } from '../../../src/DTO/CandidatoDTO';
import { Vaga } from 'src/DTO/VagasDTO';

@Component({
  selector: 'app-home-candidato',
  templateUrl: './home-candidato.component.html',
  styleUrls: ['./home-candidato.component.scss']
})
export class HomeCandidatoComponent implements OnInit {

  constructor(private homeCandidatoService: HomeCandidatoService) { }
  vagas: Vaga[];
  exibePagina = false;

  ngOnInit() {
    this.BuscarVaga();

  }

  BuscarVaga()
  {
    this.homeCandidatoService.BuscarVaga().subscribe(retorno => {
      this.vagas = retorno;
    });
  }
  
}
