import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthGuard } from './_guards';
import { RegisterComponent } from './register';


export const AppRoutes: Routes = [
  { 
    path: '', 
    redirectTo: 'dashboard',
    pathMatch: 'full',
    canActivate: [AuthGuard]
  }, 
  
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },


  {
    path: '',
    component: AdminLayoutComponent,
    children: 
    [
      {
        path: '',
        loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule',
        canActivate: [AuthGuard]        
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'dashboard'
    
  }
];

export const routing = RouterModule.forRoot(AppRoutes);