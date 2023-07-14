import { Router, Request, Response } from "express";
import LivrosRepository from "../modules/livros/repositories/LivrosRepository";
import CriarLivroService from "../modules/livros/services/CriarLivroService";


const livrosRoutes = Router();
const livrosRepository = new LivrosRepository();

livrosRoutes.post('/', (req: Request, res: Response) => {
    const { titulo, descricao, ano } = req.body;

    const criarLivroService = new CriarLivroService(livrosRepository);

    criarLivroService.execute({ titulo, descricao, ano });

    return res.status(201).send();
});

livrosRoutes.get('/', (req: Request, res: Response) => {
    const lista = livrosRepository.listar();
    return res.json(lista);
});

export default livrosRoutes;