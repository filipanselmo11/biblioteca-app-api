import Livro from "../model/Livro";

export interface ICriarLivroDTO {
    titulo: string;
    descricao: string;
    ano: number;
}

export interface ILivrosRepository {
    criar({ titulo, descricao, ano }: ICriarLivroDTO): void;
    listar(): Livro[];
    procurarPorTitulo(titulo: string): Livro;
}