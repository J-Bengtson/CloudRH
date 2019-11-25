import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertService, UserService } from '../_services';


import { FirebaseService } from '../_services/firebase.service';
import Swal from 'sweetalert2';

@Component({templateUrl: 'register.component.html'})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;

    //
    registerUser: FormGroup;
    loading = false;
    submitted = false;
    isCompany = true;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private userService: UserService,
        private alertService: AlertService,
        private firebaseService: FirebaseService) { }

    ngOnInit() {
        this.registerUser = this.formBuilder.group({
            firstName: ['', Validators.required],
            emailUser: ['', Validators.required, Validators.email],
            username: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });

        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            username: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    onBack(){
        this.router.navigate(['login'])
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
     
        this.loading = true;

        this.userService.register(this.registerForm.value)
            .pipe(first())
            .subscribe(
                g => {
                    this.registerFirebase();
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                          toast.addEventListener('mouseenter', Swal.stopTimer)
                          toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                      })
                      
                      Toast.fire({
                        icon: 'success',
                        title: 'Signed in successfully'
                      })
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Username já cadastrado',
                      })
            });
        }

        change(){
            this.isCompany = !this.isCompany;

        }

        registerFirebase(){
            this.isCompany ? this.firebaseService.createCompany( this.registerForm.value ) : this.firebaseService.createUser( this.registerForm.value ) ;
        }
}


