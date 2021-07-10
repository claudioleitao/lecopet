import { Address } from "./address.model";

export interface Fornecedor {
    id?: number
	name: string;
    cnpj: string;
    address: Address;
    responsibleName: string;
    telephone: string;
    email: String;
    //products: Product[];
}