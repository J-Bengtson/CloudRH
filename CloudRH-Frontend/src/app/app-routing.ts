import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ConfiguracoesUsuarioComponent } from './configuracoes-usuario/configuracoes-usuario.component';
import { VisualizaVagaComponent } from './visualiza-vaga/visualiza-vaga.component';
import { HomeEmpresaComponent } from './home-empresa/home-empresa.component';
import { CadastraVagaComponent } from './cadastra-vaga/cadastra-vaga.component';

export const ROUTES: Routes = [

{ path: '', component: LoginComponent },
{ path: 'home-empresa', component: HomeEmpresaComponent },
{ path: 'configuracoes-usuario', component: ConfiguracoesUsuarioComponent },
{ path: 'visualiza-vaga', component: VisualizaVagaComponent },
{ path: 'cadastra-vaga', component: CadastraVagaComponent }



]