import Usuario from "../model/Usuario";
import { ICriarUsuarioDTO, IUsuariosRepository } from "./IUsuariosRepository";


export default class UsuariosRepository implements IUsuariosRepository {
    private usuarios: Usuario[];

    constructor() {
        this.usuarios = [];
    }

    criar({ nome, cpf, email }: ICriarUsuarioDTO): void {
        const usuario = new Usuario();

        Object.assign(usuario, {
            nome,
            cpf,
            email
        });

        this.usuarios.push(usuario);
    }

    listar(): Usuario[] {
        return this.usuarios;
    }

    procurarPorCpf(cpf: string): Usuario {
        const usuario = this.usuarios.find((usuarioItem) => usuarioItem.cpf === cpf);

        return usuario;
    }
}

