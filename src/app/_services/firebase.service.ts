import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Company } from 'app/_models/company'


import { AngularFireStorage} from '@angular/fire/storage';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from 'app/_models';
import { UserCurrentService } from 'app/user-current.service';
import { Candidato } from 'app/_models/candidato';

@Injectable()
export class FirebaseService {
    constructor
        (private http: HttpClient,
        private storage: AngularFireStorage,
        private firestore: AngularFirestore,
        private userCurrentService: UserCurrentService
        ){}

    private user : User;
    private candidatoUrl = this.firestore.collection('users');
    private companyUrl = this.firestore.collection('company');
    private dataUrl = this.firestore.collection('data');


    setNewUser( destiny: string, home: string, date: string,  transport: string, value: String){
        this.candidatoUrl.add({
            nameUser: this.userCurrentService.getUserName(),
            destiny: destiny,
            home: home,
            date: date,
            transport: transport,
            value: value
        });
    }

    public getAllData(){
        return this.dataUrl.valueChanges();
    }
    

    setUser( user : User){
        this.user = user;
    }
    getUser() : User{
        return this.user;
    }


    searchUser(username : string){


        this.getAllCandidato().subscribe( e =>{ //
            let user = e.forEach( j => {
                let user = (j as unknown as User);
                console.log(user.username + " " + username);
                if (user.username == username)
                    if(user.tipo == 0)
                        this.user = (j as unknown as Company);
                    else( user.tipo == 1)
                        this.user = (j as unknown as Candidato);
            });

        });
        this.getAllCompany().subscribe(( e =>{//
            e.forEach( j => {
                let user = (j as User);
                if (user.username == username)
                    if(user.tipo == 0)
                        this.user = (j as Company);
                    else( user.tipo == 1)
                        this.user = (j as Candidato);
            });
        }));

        console.log(this.user);
    }

    createData(data){
        this.dataUrl.add(data);
    }


    getVagas(){

    }

    getEmpresa(){
        
    }

    //
    createUser( candidato : Candidato){
        //const id = this.userCurrentService.getId();
        //const completeName = this.userCurrentService.getFirstName() + ' ' + this.userCurrentService.getLastName();
        candidato.tipo = 1;
        if(!this.verificaSenha( candidato.username , candidato.password)){

            return this.candidatoUrl.add({
                tipo : candidato.tipo,
                name: candidato.firstName,
                username: candidato.username,
                password : candidato.password,
                
            });
        }

    }

    createCompany(company: Company){
        //const id = this.userCurrentService.getId();
        //const completeName = this.userCurrentService.getFirstName() + ' ' + this.userCurrentService.getLastName();
        company.tipo = 0;
        if(!this.verificaSenha(company.username , company.password))
            return this.companyUrl.add({
                tipo: company.tipo,
                name : company.firstName,
                username : company.username,
                password : company.password
            });
    }

    login(username : string){
        this.searchUser(username);
        console.log("login user");
    }


    
    verificaSenha( username : string , password : string) : boolean{


        this.getAllCompany().forEach( e =>{
            e.forEach( j =>{
                if( password === (j as User).password && (j as User).username === username)
                    return true;
            });
        });

        this.getAllCandidato().forEach( e =>{
            e.forEach( j =>{
                if( password === (j as unknown as User).password && (j as unknown as User).username === username)
                    return true;
            });
        })

        return false;
    }



    

    getAllUser(){
      return  this.candidatoUrl.valueChanges();
    }

    getAllCompany(){
        return this.companyUrl.valueChanges();
    }

    getAllCandidato(){
        return this.candidatoUrl.valueChanges(); // valueChanges()
    }

    updateUser(id){
        this.candidatoUrl.doc(id.payload.doc.id).set({id : 1 , name : "teste"});
    }

    updateCompany(id , company : Company){
        this.companyUrl.doc(id).set(company);
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