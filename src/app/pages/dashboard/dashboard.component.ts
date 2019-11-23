import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { UserCurrentService } from 'app/user-current.service';


@Component({
    selector: 'dashboard-cmp',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit{

  constructor(
    public userCurrentService: UserCurrentService
  ){

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
