import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Address } from './address.model';
import { Fornecedor } from './fornecedor.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class FornecedoresService {

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

  findAllFornecedores(): Observable<Fornecedor[]> {
    const url = `${this.baseUrl}/fornecedores`;
    return this.http.get<Fornecedor[]>(url);    
  }

  findFornecedor(id: number): Observable<Fornecedor[]> {
    const url = `${this.baseUrl}/fornecedores/${id}`;
    return this.http.get<Fornecedor[]>(url);
  }

  findAddress(fornecedor_id: number):Observable<Address> {
    const url = `${this.baseUrl}/enderecofornecedores?fornecedor=${fornecedor_id}`;
    return this.http.get<Address>(url);
  }

  updateAddress(address: Address): Observable<Address> {
    const url = `${this.baseUrl}/enderecofornecedores/${address.id}`;
    return this.http.put<Address>(url, address);    
  }

  createAddress(address: Address): Observable<Address> {
    const url = `${this.baseUrl}/enderecofornecedores`;
    return this.http.post<Address>(url, address);
  }

  createFornecedor(fornecedor: Fornecedor): Observable<Fornecedor> {
    const url = `${this.baseUrl}/fornecedores`;
    return this.http.post<Fornecedor>(url, fornecedor);
  }

  deleteFornecedor(id: number): Observable<Fornecedor> {
    const url = `${this.baseUrl}/fornecedores/${id}`
    return this.http.delete<Fornecedor>(url)
  }

  updateFornecedor(fornecedor: Fornecedor): Observable<Fornecedor> {
    const url = `${this.baseUrl}/fornecedores/${fornecedor.id}`
    return this.http.put<Fornecedor>(url, fornecedor)
  }
}
