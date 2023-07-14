import Usuario from "../model/Usuario";

export interface ICriarUsuarioDTO {
    nome: string;
    cpf: string;
    email: string;
}

export interface IUsuariosRepository {
    criar({ nome, cpf, email }: ICriarUsuarioDTO): void;
    listar(): Usuario[];
    procurarPorCpf(cpf: string): Usuario;
}