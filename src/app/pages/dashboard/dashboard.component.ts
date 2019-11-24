import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { UserCurrentService } from 'app/user-current.service';
import { Router } from '@angular/router';

@Component({
    selector: 'dashboard-cmp',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit{

  constructor(
    public userCurrentService: UserCurrentService,
    public router: Router
  ){}

  onLogout(){
    this.router.navigate(['login']);
  }

  onRedirectUser(){
    this.router.navigate(['user']);
  }

  public canvas : any;
  public ctx;
  public chartColor;
  public chartEmail;
  public chartHours;

  public user: any;

  /**
   * getUserCurrent
   */
 
    ngOnInit(){
      const data = this.userCurrentService.getCurrentUser();
      console.log(data);


    }
}
