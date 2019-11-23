import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService, AuthenticationService } from '../_services';
import Swal from 'sweetalert2'
import { CssSelector } from '@angular/compiler';

@Component(
    {templateUrl: 'login.component.html',
    styles: [`
    :host {
      display: flex;
      justify-content: center;
      margin: 100px 0px;
    }

    .mat-form-field {
      width: 100%;
      min-width: 300px;
    }

    mat-card-title,
    mat-card-content {
      display: flex;
      justify-content: center;
    }

    .error {
      padding: 16px;
      width: 300px;
      color: white;
      background-color: red;
    }

    .button {
      display: flex;
      justify-content: flex-end;
    }
  `,]

    })

export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) {}

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Bem Vindo, ' + this.f.username.value,
                        showConfirmButton: false,
                        timer: 3000
                      });
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Password ou username invalido!',
                        footer: '<a href> Tente Novamente</a>'
                      })
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
