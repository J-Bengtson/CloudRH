import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Company } from 'app/_models/company'


import { AngularFireStorage} from '@angular/fire/storage';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from 'app/_models';
import { UserCurrentService } from 'app/user-current.service';

@Injectable()
export class FirebaseService {
    constructor
        (private http: HttpClient,
        private storage: AngularFireStorage,
        private firestore: AngularFirestore,
        private userCurrentService: UserCurrentService
        ){}

    private userUrl = this.firestore.collection('users');
    private companyUrl = this.firestore.collection('company');



    //
    createUser(){
        const id = this.userCurrentService.getId();
        const completeName = this.userCurrentService.getFirstName() + ' ' + this.userCurrentService.getLastName();

        return this.userUrl.add({
            id : 1 ,
            idUser: id,
            name: completeName
        });
    }

    createCompany(company: Company){
        const id = this.userCurrentService.getId();
        const completeName = this.userCurrentService.getFirstName() + ' ' + this.userCurrentService.getLastName();

        const data = {
            id: 1,
            idUser: id,
            name: completeName
        }

        return this.companyUrl.add({
            data
        });
    }

    getUser(){
      return  this.userUrl.valueChanges();
    }

    getCompany(){
    return this.companyUrl.valueChanges();
    }


    /*getAll() {
        return this.http.get<Company[]>(`/companies`);
    }

    getById(id: number) {
        return this.http.get(`/companies/` + id);
    }

    register(company: Company) {
        return this.http.post(`/companies/register`, company);
    }

    update(company: Company) {
        return this.http.put(`/companies/` + company.id, company);
    }

    delete(id: number) {
        return this.http.delete(`/companies/` + id);
    }
    */


}