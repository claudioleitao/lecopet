import { Produto } from './produto.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
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

  findAllProdutos(): Observable<Produto[]> {
    const url = `${this.baseUrl}/produtos`;
    return this.http.get<Produto[]>(url);    
  }

  findProduto(id: number): Observable<Produto[]> {
    const url = `${this.baseUrl}/Produtos/${id}`;
    return this.http.get<Produto[]>(url);
  }

  createProduto(produto: Produto): Observable<Produto> {
    const url = `${this.baseUrl}/produtos`;
    return this.http.post<Produto>(url, produto);
  }

  deleteProduto(id: number): Observable<Produto> {
    const url = `${this.baseUrl}/produtos/${id}`
    return this.http.delete<Produto>(url)
  }

  updateProduto(produto: Produto): Observable<Produto> {
    const url = `${this.baseUrl}/produtos/${produto.id}`
    return this.http.put<Produto>(url, produto)
  }
}
