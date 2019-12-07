import { Endereco } from './EnderecoDTO';
import { Contato } from './ContatoDTO';

export class Candidato {
    cpf: String;
    nome: String;
    genero: String;
    Contato: Contato;
    Endereco: Endereco;
}