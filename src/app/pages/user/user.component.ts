import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { FirebaseService } from 'app/_services/firebase.service';
import { Company } from 'app/_models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


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
    ){}

    ngOnInit(){
        
    this.loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });
      //this.readUsers();
    }




    create(){
       
        this.firebaseService.createUser();
    }

    readUsers(){
       
        this.firebaseService.getUser().subscribe(
            data => {
                console.log(data);
            }
        )
    }


}
