import { Injectable } from '@angular/core';
import { AuthenticationService } from './_services';
import { User } from './_models';

@Injectable({
  providedIn: 'root'
})
export class UserCurrentService {

  constructor(
    auth: AuthenticationService,
  ) { }


  public getCurrentUser(): User | null{
    return localStorage ? JSON.parse(localStorage.getItem('currentUser')) : null;
  }

  public getUserName(){
    return this.getCurrentUser().username;
  }

  public getFirstName(){
    return this.getCurrentUser().firstName;
  }

  public getId(){
    return this.getCurrentUser().id;
  }

  public getLastName(){
    return this.getCurrentUser().lastName;
  }

  public getPassword(){
    return this.getCurrentUser().password;
  }
}
