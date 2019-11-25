import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { UserCurrentService } from 'app/user-current.service';
import { Router } from '@angular/router';
import { FirebaseService } from 'app/_services/firebase.service';
import { Company } from 'app/_models';
import { Candidato } from 'app/_models/candidato';
import { Data } from 'app/_models/data';

@Component({
    selector: 'dashboard-cmp',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit{

  constructor(
    public userCurrentService: UserCurrentService,
    public router: Router,
    public firebaseService: FirebaseService 
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
  public company :Array<any> = new Array<any>();
  public candidate: Array<any> = new Array<any>();
  public data: Array<any> = new Array<any>();
  

  /**
   * getUserCurrent
   */
 
    ngOnInit(){
      const user = this.userCurrentService.getCurrentUser();
      
      this.getAllCompanies();
      this.getAllCandidates();
      this.getAllData();

    }

    public getAllData(){
      this.firebaseService.getAllData().subscribe(
        data => {
          console.log((data as Data[]));
          (data as Data[]).map( e =>{
            this.data.push(e);
          })
        }
      );
    }



    public getAllCompanies(){
      this.firebaseService.getAllCompany().subscribe(
        data => {
          console.log((data as Company[]));
          this.company = new Array<any>();
          (data as Company[]).map( e =>{
            this.company.push(e);
          });
          //this.allCompanies.push(data);
          //console.log(this.allCompanies);
        }
      )
    }

    public getAllCandidates(){
      this.firebaseService.getAllCandidato().subscribe(
        data =>{
          console.log((data as Candidato[]));
          this.candidate = new Array<any>();
          (data as Candidato[]).map( e=> {
            this.candidate.push(e);
          })
        }
      )
    }

    alterar( company ){
      console.log("alterar");
      console.log(company);
      console.log(company.name);
    }
}
