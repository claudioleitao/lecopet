import { Address } from "./address.model";

export interface Client {
    id?: number;
    name: string;
    address: Address;
    telephone: string;
    email: string;
    sex: string;
    status: boolean;
}