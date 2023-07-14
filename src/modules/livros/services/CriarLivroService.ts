import { ILivrosRepository } from "../repositories/ILivrosRepository";

interface IRequest {
    titulo: string;
    descricao: string;
    ano: number;
}

export default class CriarLivroService {
    private livrosRepository: ILivrosRepository;

    constructor(livrosRepository: ILivrosRepository) {
        this.livrosRepository = livrosRepository;
    }

    execute({ titulo, descricao, ano}: IRequest): void {
        const livroJaExiste = this.livrosRepository.procurarPorTitulo(titulo);

        if(livroJaExiste) {
            throw new Error('Livro já existe')
        }

        this.livrosRepository.criar({ titulo, descricao, ano });
    }
}