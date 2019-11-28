import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { UserCurrentService } from 'app/user-current.service';
import { Router } from '@angular/router';
import { FirebaseService } from 'app/_services/firebase.service';
import { Company, User } from 'app/_models';
import { Candidato } from 'app/_models/candidato';
import { Data } from 'app/_models/data';
import Swal from 'sweetalert2';
import { validateEventsArray } from '@angular/fire/firestore';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material';


@Component({
    selector: 'dashboard-cmp',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html'
})






export class DashboardComponent implements OnInit{

  public async insertData(){
    

    const { value: home } = await Swal.fire({
      title: 'ETAPA 1',
      text: 'De onde?',
      input: 'text',
      inputPlaceholder: 'Sua localidade',
      inputAttributes: {
        'aria-label': 'Type your message here'
      },
      showCancelButton: true
    })
    
    if (home) {
      Swal.fire(home)
      console.log(home);
    }

    const { value: destiny } = await Swal.fire({
      title: 'ETAPA 2',
      text: 'Para Onde?',
      input: 'text',
      inputPlaceholder: 'Destino',
      inputAttributes: {
        'aria-label': 'Type your message here'
      },
      showCancelButton: true
    })
    
    if (destiny) {
      Swal.fire(destiny)
      console.log(destiny);
    }

    const { value: date } = await Swal.fire({
      title: 'ETAPA 3',
      text: 'Data (DD/MM/AA)',
      input: 'text',
      inputPlaceholder: 'Data',
      inputAttributes: {
        'aria-label': 'Type your message here'
      },
      showCancelButton: true
    })
    
    if (date) {
      Swal.fire(date)
      console.log(date);
    }
    


    const { value: transport } = await Swal.fire({

      title: 'ETAPA 4',
      input: 'select',
      inputOptions: {
        bus: 'Onibus',
        car: 'Carro',
        airplane: 'Avião',
        foot: 'a pé'
      },
      inputPlaceholder: 'Selecione o meio de Transporte',
      showCancelButton: true,
      inputValidator: (value) => {
        return new Promise((resolve) => {
          console.log(value);
          if (value !== 'foot') {
            resolve()
          } else {
            resolve('TA MALUCO, TEM COMO IR A PÉ NÃO!!!!!')
          }
        })
      }
    })


    if(transport == ''|| date  == '' || destiny == '' || home == '' ||
    transport == null|| date  == null || destiny == null || home == null){
      
        Swal.fire({
          icon: 'error',
          title: 'Campo(s) Invalido(s)',
          text: 'Preencha Todos Os Campos Corretamente'
        })
      return 
    }

     
let timerInterval
Swal.fire({
  title: 'Calculando preço da rota',
  html: 'Pode demorar alguns segundos.',
  timer: 2000,
  timerProgressBar: true,
  onBeforeOpen: () => {
    Swal.showLoading()
    timerInterval = setInterval(() => {
    }, 1000)
  },
  onClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  if (
   
    result.dismiss === Swal.DismissReason.timer
  ) {
    this.arr = new Array();
    var random = this.calculateRandom();
    Swal.fire({
      title: 'Valor da sua viagem',
      text: 'R$' + random + '',
      
      showClass: {
        popup: 'animated fadeInDown faster'
      },
      hideClass: {
        popup: 'animated fadeOutUp faster'
      }
    })
    this.firebaseService.setNewUser(destiny, home, date, transport, random);

  }
})



  }

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
      
      this.SearchMe(user.username);

      

    }


  ///////////////////////////////////////////////////////
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

    arr: UserFace[];
    SearchMe(myUserName: string){
      this.arr = new Array();
      console.log(this.arr);
      this.firebaseService.getAllCandidato().subscribe(
        data => {
         data.map( e => {
           var value = e as UserFace;
          if(value.nameUser == this.userCurrentService.getUserName())
            this.arr.push(value);
          

       
             

         })
          
        }   
      )

      console.log(this.arr);
    }


    calculateRandom(): any{
    const random = Math.floor(Math.random() * 241 ) ;
    const random2 = Math.floor(Math.random() * 101 ) ;
    console.log( random + '.'+ random2);
    return random + '.'+ random2;
   
    }
    





    ////////////////////////////////////////////////////////////////////////
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





interface UserFace{
  date: string
destiny: string
home: string
nameUser: string
transport: string,
value: string
}
