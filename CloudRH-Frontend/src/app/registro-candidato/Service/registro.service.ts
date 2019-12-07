import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Candidato } from '../../../../src/DTO/CandidatoDTO';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(private http: HttpClient) { }


  RegistroCandidato(candidato: Candidato) 
  {
   return this.http.post<Candidato>(
     'http://localhost:4300/registro/v1/candidato', candidato
   );
  }
}
