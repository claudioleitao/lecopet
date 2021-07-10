import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from '../../fornecedores/address.model';
import { Fornecedor } from '../../fornecedores/fornecedor.model';
import { FornecedoresService } from '../../fornecedores/fornecedores.service';
import { Produto } from '../produto.model';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-produto-update',
  templateUrl: './produto-update.component.html',
  styleUrls: ['./produto-update.component.css']
})
export class ProdutoUpdateComponent implements OnInit {
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
  
  constructor(private service: ProdutosService, private fornecedorService: FornecedoresService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.produto.id = Number(this.route.snapshot.paramMap.get("id"))
    this.loadAllProviders()  
    this.loadProduto()
  }

  loadAllProviders() {
    this.fornecedorService.findAllFornecedores().subscribe(elements => {
      this.fornecedores = elements
    })
  }

  loadProduto() {
    this.service.findAllProdutos().subscribe(elements => {
      elements.forEach(produto => {
        if (produto.id == this.produto.id) {
          this.produto = produto
        }
      })
    })
  }

  update() {
    this.service.updateProduto(this.produto).subscribe(element => {
      this.service.message("Produto "+this.fornecedor.name+" foi atualizado com sucesso!", "Dismiss", "success", 3000)
      this.router.navigate(["/produtos"]);
    })
  }

  cancelar() {
    this.router.navigate(["/produtos"]);
  }
}
