import { Breed } from "./breed.models";
import { Client } from "./client.model";

export interface Pet {
    id?: number;
    name: String;
    age: String;
    weight: number;
    sex: String;
    dead: boolean;
    breed: Breed;
    client: Client;
}