import { Router, Request, Response } from "express";
import UsuariosRepository from "../modules/usuarios/repositories/UsuariosRepository";
import CriarUsuarioService from "../modules/usuarios/services/CriarUsuarioService";



const usuariosRoutes = Router();
const usuariosRepository = new UsuariosRepository();

usuariosRoutes.post('/', (req: Request, res: Response) => {
    const { nome, cpf, email } = req.body;

    const criarUsuarioService = new CriarUsuarioService(usuariosRepository);

    criarUsuarioService.execute({ nome, cpf, email });

    return res.status(201).send();
});

usuariosRoutes.get('/', (req: Request, res: Response) => {
    const lista = usuariosRepository.listar();
    return res.json(lista);
});

export default usuariosRoutes;