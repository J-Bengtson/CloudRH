import {Contato , Endereco} from '.';

export class Company {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string; //remover
    /* */
    cpnj: string;
    razaoSocial: string;
    Contato: Contato;
    Endereco: Endereco;
}