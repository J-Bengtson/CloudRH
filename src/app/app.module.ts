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
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
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
  MatDividerModule,
  
} from '@angular/material';
import { UserCurrentService } from './user-current.service';

import { FirebaseService } from './_services/firebase.service';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';

var firebaseConfig = {
  apiKey: "AIzaSyCtfCEx4vUMOiB6RkmSge8KtLaB8JMD3Qg",
  authDomain: "fir-fumec.firebaseapp.com",
  databaseURL: "https://fir-fumec.firebaseio.com",
  projectId: "fir-fumec",
  storageBucket: "fir-fumec.appspot.com",
  messagingSenderId: "438980144068",
  appId: "1:438980144068:web:07174cf297548d9b469291",
  measurementId: "G-3ZFE0XRYYZ"
};

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
    FormsModule,
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

    // modules firebase
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,

    AngularFirestoreModule,
    AngularFireStorageModule,


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
    UserCurrentService ,
    FirebaseService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
