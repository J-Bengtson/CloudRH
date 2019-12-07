import { Component, OnInit, } from '@angular/core';
import { LoginDTO } from 'src/DTO/LoginDTO';
import { LoginService } from './Service/login.service';
import { Candidato } from 'src/DTO/CandidatoDTO';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: LoginDTO;
  dadosUsuario: Candidato;
  constructor(private LoginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.login = new LoginDTO();
    this.login.tipoUsuario = 1;
  }

  ValidaLogin()
  {
   this.LoginService.validaLogin(this.login).subscribe(retorno => {
    this.dadosUsuario = retorno;
   });
   this.router.navigate(['/home-empresa']);
  }




}
