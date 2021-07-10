import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from '../../fornecedores/address.model';
import { Fornecedor } from '../../fornecedores/fornecedor.model';
import { Produto } from '../produto.model';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-produto-delete',
  templateUrl: './produto-delete.component.html',
  styleUrls: ['./produto-delete.component.css']
})
export class ProdutoDeleteComponent implements OnInit {
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
  constructor(private service: ProdutosService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.produto.id = Number(this.route.snapshot.paramMap.get("id"))
    this.loadProduto()
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

  deletar() {
    this.service.deleteProduto(this.produto.id!).subscribe(element => {
      this.service.message("Produto "+this.produto.name+" foi deletado com sucesso!", "Dismiss", "success", 3000)
      this.router.navigate(["/produtos"]);
    })
  }

  cancelar() {
    this.router.navigate(["/produtos"]);
  }

}
