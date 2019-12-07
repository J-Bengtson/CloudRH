import { Component, OnInit } from '@angular/core';
import { Candidato } from '.././../../src//DTO/CandidatoDTO';
import { Contato } from '../../../src/DTO/ContatoDTO';
import { Endereco } from '../../../src/DTO/EnderecoDTO';
import { RegistroService } from './Service/registro.service';
import { Router } from '@angular/router';
import { NivelRegistroEnum } from './Enum/nivel-registro-enum';

@Component({
  selector: 'app-registro-candidato',
  templateUrl: './registro-candidato.component.html',
  styleUrls: ['./registro-candidato.component.scss']
})
export class RegistroCandidatoComponent implements OnInit {
  constructor(private registroService: RegistroService) { }
    candidato: Candidato;
    NivelRegistroEnum = NivelRegistroEnum
    nivelRegistro = NivelRegistroEnum.dadosPessoais;
    
    ngOnInit() {
      this.candidato = new Candidato();
      this.candidato.Contato = new Contato();
      this.candidato.Endereco = new Endereco();
    }
    
    Continuar(passo)
    {
      if(passo == 1 ){
        this.nivelRegistro = this.NivelRegistroEnum.dadosContato;
        console.log(this.candidato);
      }
      if(passo == 2)
      this.nivelRegistro = this.NivelRegistroEnum.dadosEndereco;
      
      if(passo == 3)
      console.log(this.candidato);
      // this.registroService.RegistroCandidato(this.candidato);
    }
  }
  