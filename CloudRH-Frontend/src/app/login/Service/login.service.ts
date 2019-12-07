import { Injectable } from '@angular/core';
import { LoginDTO } from 'src/DTO/LoginDTO';
import { HttpClient } from '@angular/common/http';
import { Candidato } from 'src/DTO/CandidatoDTO';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  validaLogin(login: LoginDTO)
  {
    return this.http.post<Candidato>(
      'http://localhost:4300/Login/v1/candidato', login
    );
  }
}
