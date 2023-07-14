import { v4 as uuidv4 } from 'uuid'

export default class Usuario {
    id?: string;
    nome: string;
    cpf: string;
    email: string;
    
    constructor(){
        if(!this.id) {
            this.id = uuidv4();
        }
    }
}