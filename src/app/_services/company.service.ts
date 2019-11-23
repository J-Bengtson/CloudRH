import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Company } from 'app/_models/company'
@Injectable()
export class CompanyService {
    constructor(private http: HttpClient) { }

    getAll() {
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
}