import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { UserCurrentService } from 'app/user-current.service';
import { Router } from '@angular/router';
import { FirebaseService } from 'app/_services/firebase.service';
import { Company, User } from 'app/_models';
import { Candidato } from 'app/_models/candidato';
import { Data } from 'app/_models/data';
import Swal from 'sweetalert2';

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

  public
  

  /**
   * getUserCurrent
   */
 
    ngOnInit(){
      const user = this.userCurrentService.getCurrentUser();
      
      this.getAllCompanies();
      this.getAllCandidates();
      this.getAllData();

    }

    values: String[]
    date;
    destiny
    transport
    async add(){
      
      var destiny;
      var date;
      var transport;
      const { value: formValues } = await Swal.fire({
        title: 'dados',
        html:
        '<input id="swal-input1" class="swal2-input">' + 
        '<input id="swal-input2" class="swal2-input">'
      })
      Swal.mixin({
        input: 'text',
        confirmButtonText: 'Next &rarr;',
        showCancelButton: true,
        progressSteps: ['1', '2', '3']
      }).queue([
          {
          title: 'PASSO 1:',
          text: 'Localidade ',
          input: 'text',          
          inputValue: destiny
        },
        {
            title: 'PASSO 2:',
            text: 'DATA (DD/MM/AA)',
            input: 'text',
            inputValue: date
          },
          {
            title: 'PASSO 3:',
            text: 'Transporte',
            input: 'text',   
            inputValue: transport
            }            
      ]).then((result) => {
        if (result.value) {
          console.log(destiny + '' + date + '' + transport);
          const answers = JSON.stringify(result.value)
          console.log(answers);
          const slice = ','
          const values = answers.split(slice);

          const cut = values.map(
            data => {
              var filter = data.replace('"', '');
              console.log(filter);
              filter = filter.replace(']','');
              filter = filter.replace('[', '');
              filter = filter.replace('"','');
              filter = filter.trim();
              console.log(filter);  
             this.values.push(filter);
            });
          console.log(this.values);   
          Swal.fire({
            title: 'All done!',
            html: `
              Your answers:s
              <pre><code>${answers}</code></pre>
            `,
            confirmButtonText: 'Lovely!'
          })
        }
      })



/*
var cloud_email = $('.cloud_email').text();
var user_name = $('.user_name').text();;
swal.setDefaults({
  confirmButtonText: 'Next &rarr;',
  showCancelButton: true,
  animation: false
});

var steps = [
  {
    //ask for and validate email here
    type: 'question',
    title: 'Please enter email address',
    input: 'email',
    inputValue: cloud_email  
  },
  {
    //ask for and validate text input here
    type: 'question',
    title: 'Please enter user name',
    input: 'text',
    inputValue: user_name
  }
];

swal.queue(steps).then(function(email, name) {
  swal({
    type: 'success',
    html: 'Email successfully sent to: ' + name + ': '+ email
  });
}
*/
  }






    public getAllData(){
      this.firebaseService.getAllData().subscribe(
        data => {
          console.log((data as Data[]));
          (data as Data[]).map( e =>{
            console.log(e);
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
