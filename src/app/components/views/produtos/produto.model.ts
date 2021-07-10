import { Fornecedor } from "../fornecedores/fornecedor.model";

export interface Produto {
 	id?: number
    name: string
    description: string
    barCode: string
    provider: Fornecedor
    //productEntry: EntradaProduto
	//stock: Estoque
	//sale: Venda
}