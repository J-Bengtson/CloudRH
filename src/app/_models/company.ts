import {Contato , Endereco, User, Vaga} from '.';

export class Company extends User{
    cnpj : string;
    descricao : string;
}