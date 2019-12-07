import { Injectable } from '@angular/core';
import { Vaga } from 'src/DTO/VagasDTO';
import { Candidato } from 'src/DTO/CandidatoDTO';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VisualizaVagaService {

  constructor(private http: HttpClient) { }

  vincularVaga(vaga: Vaga, candidato: Candidato)
  {
    var body = {"vaga": vaga, "candidato": candidato};
    return this.http.post('http://localhost:8090/api/vaga', body);
  }
}
