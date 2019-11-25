import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { FirebaseService } from 'app/_services/firebase.service';
import { Company, User } from 'app/_models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserCurrentService } from 'app/user-current.service';


@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit{
    loginForm: FormGroup;

    constructor(
        private firebaseService : FirebaseService,
        private formBuilder: FormBuilder,
        private userService: UserCurrentService
    ){}

    ngOnInit(){
        
    this.loginForm = this.formBuilder.group({
        data: ['', Validators.required],
        area: ['', Validators.required]
    });
      //this.readUsers();
    }


    updateUser(){
        this.firebaseService.updateUser('1');
    }

    update

    click(){
        this.firebaseService.searchUser(this.userService.getUserName());
        
        this.firebaseService.createData({
            data: "dsdsdsdsds",
            area: "jornalismo",
            nome:  this.userService.getUserName(),
            tipo: 1

        })
    }
    create(){
       // this.firebaseService.createUser();
    }

   

}
