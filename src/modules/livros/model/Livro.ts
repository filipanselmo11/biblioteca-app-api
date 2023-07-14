import { v4 as uuidv4 } from 'uuid'
export default class Livro {
    id?: string;
    titulo: string;
    descricao: string;
    ano: number;

    constructor() {
        if (!this.id) {
            this.id = uuidv4();
        }
    }
}