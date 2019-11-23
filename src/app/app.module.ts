import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
/***********    modules essenciais  *************/
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { JwtModule, JwtModuleOptions } from '@auth0/angular-jwt';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { routing }        from './app.routing';
import { AuthGuard } from './_guards';
import { AlertService, AuthenticationService, UserService } from './_services';
import { LoginComponent } from './login';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register';
import { BrowserModule } from '@angular/platform-browser';
import { fakeBackendProvider, ErrorInterceptor, JwtInterceptor } from './_helpers';
import { AlertComponent } from './_directives';
/***********  modules material *************/
import {  
  MatIconModule,
  MatCardModule,
  MatSlideToggleModule,
  MatInputModule,
  MatButtonModule,
  MatFormFieldModule,
  MatDividerModule
} from '@angular/material';
import { CompanyService } from './_services/company.service';
import { UserCurrentService } from './user-current.service';


export function tokenGetter() {
  return localStorage.getItem("access_token");
}



@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    RegisterComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes,{
      useHash: true
    }),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule,
    MatCardModule,
    MatIconModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule, 
    MatDividerModule,


    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ["example.com"],
        blacklistedRoutes: ["example.com/examplebadroute/"]
      }
    }),
    HttpClientModule,
    ReactiveFormsModule,
    routing
    
    //
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    fakeBackendProvider,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    CompanyService,
    UserCurrentService 

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
