import type Produto from './Produto';

export default interface Categoria {
    id: number;
    nome: string;
    foto: string;
    // Opcional: Se você já tiver o model de Produto, pode trocar 'any' por 'Produto[]'
    produto?: Produto[] | null; 
}