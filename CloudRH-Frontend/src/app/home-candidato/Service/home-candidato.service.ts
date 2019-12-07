import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vaga } from 'src/DTO/VagasDTO';


@Injectable({
  providedIn: 'root'
})
export class HomeCandidatoService {

  constructor(private http: HttpClient) { }

  BuscarVaga() : Observable<Vaga[]>
  {
    return this.http.get<Vaga[]>('http://localhost:4300/v1/buscar/vagas');
  }

}
