import { IUsuariosRepository } from "../repositories/IUsuariosRepository";

interface IRequest {
    nome: string;
    cpf: string;
    email: string;
}


export default class CriarUsuarioService {
    private usuariosRepository: IUsuariosRepository;

    constructor(usuariosRepository: IUsuariosRepository){
        this.usuariosRepository = usuariosRepository;
    }

    execute({ nome, cpf, email }: IRequest): void {
        const usuarioJaExiste = this.usuariosRepository.procurarPorCpf(cpf);

        if(usuarioJaExiste) {
            throw new Error("Usuário Já existe")
        }

        this.usuariosRepository.criar({ nome, cpf, email })
    }
}