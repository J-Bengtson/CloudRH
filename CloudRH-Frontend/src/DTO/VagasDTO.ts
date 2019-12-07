import { Empresa } from './EmpresaDTO';
export class Vaga
{
    id: number;
    dataAbertura: Date;
    dataEncerramento: Date;
    descricao: String;
    requisitos: String[];
    jornada: number;
    valor: number;
    beneficios: String[];
    turno: String;
    situacao: String;
    numVagas: number;
    empresa: Empresa;
    //TO DO

}