import Livro from "../model/Livro";
import { ICriarLivroDTO, ILivrosRepository } from "./ILivrosRepository";



export default class LivrosRepository implements ILivrosRepository {
    private livros: Livro[];

    constructor() {
        this.livros = [];
    }

    criar({ titulo, descricao, ano }: ICriarLivroDTO): void {
        const livro = new Livro();

        Object.assign(livro, {
            titulo,
            descricao,
            ano
        });

        this.livros.push(livro);
    }

    listar(): Livro[] {
        return this.livros;
    }

    procurarPorTitulo(titulo: string): Livro {
        const livro = this.livros.find((livroItem) => livroItem.titulo === titulo);

        return livro;
    }
}