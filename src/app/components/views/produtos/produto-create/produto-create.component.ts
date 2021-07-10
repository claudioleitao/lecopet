import { FornecedoresService } from './../../fornecedores/fornecedores.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Address } from '../../fornecedores/address.model';
import { Fornecedor } from '../../fornecedores/fornecedor.model';
import { Produto } from '../produto.model';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-produto-create',
  templateUrl: './produto-create.component.html',
  styleUrls: ['./produto-create.component.css']
})
export class ProdutoCreateComponent implements OnInit {

  address: Address = {
    id: 0,
    street: "",
    number: 0,
    complement: "",
    neighborhood: "",
    zipCode: "",
    city: "Recife",
    state: "Pernambuco",
    country: "Brasil"
  }

  fornecedores: Fornecedor[] = []

  fornecedor: Fornecedor = {
    id: 0,
	  name: "",
    cnpj: "",
    address: this.address,
    responsibleName: "",
    telephone: "",
    email: ""
    //products: Product[];
  }

  produto: Produto = {
    id: 0,
    name: "",
    description: "",
    barCode: "",
    provider: this.fornecedor
    //productEntry: EntradaProduto
	  //stock: Estoque
	  //sale: Venda
  }
  
  constructor(public dialog: MatDialog, private service: ProdutosService, private fornecedorService: FornecedoresService, private router: Router) { }

  ngOnInit(): void {
    this.loadAllProviders()
  }

  loadAllProviders() {
    this.fornecedorService.findAllFornecedores().subscribe(elements => {
      this.fornecedores = elements
    })
  }

  create(): void {
    this.service.createProduto(this.produto).subscribe((response) => {
        this.service.message("Cadastro do produto foi realizado com sucesso!","Dismiss","success",3000)
        this.navegandoParaProdutos()
    }, err => {
      for (let i = 0; i < err.error.errors.length; i++) {
        this.service.message("Error:"+err.error.errors[i].message,"Dismiss","error",3000)
      }
    });
  }

  navegandoParaProdutos() {
    this.router.navigate(["/produtos"]);
  }
}
