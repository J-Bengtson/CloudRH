import { Component } from '@angular/core';
import { UserCurrentService } from 'app/user-current.service';
import { Router } from '@angular/router';
import { FirebaseService } from 'app/_services/firebase.service';
import { stringify } from 'querystring';

@Component({
    selector: 'typography-cmp',
    moduleId: module.id,
    templateUrl: 'typography.component.html'
})

export class TypographyComponent{
    constructor(
    public userCurrentService: UserCurrentService,
    public router: Router,
    public firebaseService: FirebaseService 
    ){

    }

    ngOnInit(){
        const user = this.userCurrentService.getCurrentUser();
      
      this.SearchMe(user.username);

     
    
    }
    totalValue: number = 0;
    arrValue: String[];
    arr: UserFace[];
    SearchMe(myUserName: string){
      this.arr = new Array();
      this.arrValue = new Array();

      this.firebaseService.getAllCandidato().subscribe(
        data => {
         data.map( e => {
           var value = e as UserFace;
          if(value.nameUser == this.userCurrentService.getUserName()){
            this.arr.push(value);
            this.arrValue.push(value.value);
            this.totalValue = this.totalValue + Number(value.value);
            console.log(this.totalValue)
          }
            
  
         })
          
        }   
      )
    }

    calculateValues(): number{
        var total = 0;
        this.arrValue.map(data => {
           Number(data);
           
           
            return  total = +data;
        })

        return 0;
    }


}


interface UserFace{
    date: string
  destiny: string
  home: string
  nameUser: string
  transport: string,
  value: string;
  }
  