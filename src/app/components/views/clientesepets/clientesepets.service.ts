import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Address } from './address.model';
import { Breed } from './breed.models';
import { Client } from './client.model';
import { Pet } from './pet.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ClientesepetsService {

  baseUrl: String = environment.baseUrl;

  constructor(private _snackBar: MatSnackBar, private http: HttpClient) { }

  message(message: string, action: string, status: string, timer: number) {
    this._snackBar.open(message,action,{
      duration:timer,
      verticalPosition: "top",
      horizontalPosition: "center",
      panelClass: status
    })    
  }

  findAllClients(): Observable<Client[]> {
    const url = `${this.baseUrl}/clientes`;
    return this.http.get<Client[]>(url);    
  }

  findClient(pet_id?: number): Observable<Client[]> {
    const url = `${this.baseUrl}/clientes?pet=${pet_id}`;
    return this.http.get<Client[]>(url);
  }

  findAllBreeds():Observable<Breed[]> {
    const url = `${this.baseUrl}/breeds`
    return this.http.get<Breed[]>(url)
  }

  findBreed(pet_id?: number):Observable<Breed[]> {
    const url = `${this.baseUrl}/breeds?pets=${pet_id}`;
    return this.http.get<Breed[]>(url);
  }

  findAllPets():Observable<Pet[]> {
    const url = `${this.baseUrl}/pets`
    return this.http.get<Pet[]>(url);
  }

  findPetById(id: number): Observable<Pet> {
    const url = `${this.baseUrl}/pets/${id}`
    return this.http.get<Pet>(url)
  }

  findAddress(client_id?: number):Observable<Address> {
    const url = `${this.baseUrl}/clientaddress?client=${client_id}`;
    return this.http.get<Address>(url);
  }

  updateAddress(address: Address): Observable<Address> {
    const url = `${this.baseUrl}/clientaddress/${address.id}`;
    return this.http.put<Address>(url, address);    
  }

  createAddress(address: Address): Observable<Address> {
    const url = `${this.baseUrl}/clientaddress`;
    return this.http.post<Address>(url, address);
  }

  createClient(client: Client): Observable<Client> {
    const url = `${this.baseUrl}/clientes`;
    return this.http.post<Client>(url, client);
  }

  deleteClient(id: number): Observable<Client> {
    const url = `${this.baseUrl}/clientes/${id}`
    return this.http.delete<Client>(url)
  }

  updateClient(client: Client): Observable<Client> {
    const url = `${this.baseUrl}/clientes/${client.id}`
    return this.http.put<Client>(url, client)
  }

  createPet(pet: Pet): Observable<Pet> {
    const url = `${this.baseUrl}/pets`;
    return this.http.post<Pet>(url, pet);
  }

  deletePet(id: number): Observable<Pet> {
    const url = `${this.baseUrl}/pets/${id}`
    return this.http.delete<Pet>(url)
  }

  updatePet(pet: Pet): Observable<Pet> {
    const url = `${this.baseUrl}/pets/${pet.id}`
    return this.http.put<Pet>(url,pet)
  }
}
