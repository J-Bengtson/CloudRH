import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ROUTES } from './app-routing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ConfiguracoesUsuarioComponent } from './configuracoes-usuario/configuracoes-usuario.component';
import { MenuEmpresaComponent } from './menu-empresa/menu-empresa.component';
import { VisualizaVagaComponent } from './visualiza-vaga/visualiza-vaga.component';
import { HomeEmpresaComponent } from './home-empresa/home-empresa.component';
import { CadastraVagaComponent } from './cadastra-vaga/cadastra-vaga.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ConfiguracoesUsuarioComponent,
    MenuEmpresaComponent,
    VisualizaVagaComponent,
    HomeEmpresaComponent,
    CadastraVagaComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    AngularFontAwesomeModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
