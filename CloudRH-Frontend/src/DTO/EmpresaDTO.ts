import { Endereco } from './EnderecoDTO';
import { Contato } from './ContatoDTO';

export class Empresa {
    cnpj: String;
    nome: String;
    razaoSocial: String;
    Contato: Contato;
    Endereco: Endereco;
}