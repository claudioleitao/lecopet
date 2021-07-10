import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from '../address.model';
import { Fornecedor } from '../fornecedor.model';
import { FornecedoresService } from '../fornecedores.service';

@Component({
  selector: 'app-fornecedor-delete',
  templateUrl: './fornecedor-delete.component.html',
  styleUrls: ['./fornecedor-delete.component.css']
})
export class FornecedorDeleteComponent implements OnInit {
  neighborhoods: string[] = ['Aflitos','Afogados','Água Fria','Alto do Mandu',
  'Alto do Pascoal','Alto José Bonifácio','Alto José do Pinho','Alto Santa Terezinha',
  'Apipucos','Areias','Arruda','Barro','Beberibe','Benfica','Boa Viagem','Boa Vista',
  'Bomba do Hemetério','Bonji','Brasília Teimosa','Brejo da Guabiraba','Brejo do Beberibe',
  'Cabanga','Caçote','Cajueiro','Campina do Barreto','Campo Grande','Casa Amarela','Casa Forte',
  'Caxangá','Cidade Universitária','Coelhos','Cohab','Coque','Coqueiral','Cordeiro','Córrego do Jenipapo',
  'Curado','Derby','Dois Irmãos','Dois Unidos','Encruzilhada','Engenho do Meio','Entra Apulso','Espinheiro',
  'Estância','Fundão','Graças','Guabiraba','Hipódromo','Ibura','Ilha do Leite','Ilha do Retiro','Ilha Joana Bezerra',
  'Imbiribeira','Ipsep','Iputinga','Jaqueira','Jardim São Paulo','Jiquiá','Jordão','Linha do Tiro','Macaxeira',
  'Madalena','Mangabeira','Mangueira','Monteiro','Morro da Conceição','Mustardinha','Nova Descoberta','Paissandu',
  'Parnamirim','Passarinho','Pau Ferro','Peixinhos','Pina','Poço da Panela',"Ponte d'Uchoa","Ponto de Parada",
  "Porto da Madeira","Prado","Recife","Rosarinho","San Martin","Sancho","Santana","Santo Amaro","Santo Antônio",
  "São José","Setúbal","Sítio dos Pintos","Soledade","Tamarineira","Tejipió","Torre","Torreão",
  "Torrões","Totó","Várzea","Vasco da Gama","Vila Tamandaré","Zumbi"];

  cities: string[] = ['Recife','Jaboatão dos Guararapes','Olinda','Caruaru','Petrolina','Paulista','Cabo de Santo Agostinho',
  'Camaragibe','Garanhuns','Vitória de Santo Antão','Igarassu','São Lourenço da Mata','Outro']

  states: string[] = ["Pernambuco","Outro"]
  countries: string[] = ["Brasil","Outro"]
  sexlist: string[] = ["Masculino","Feminino"]

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

  constructor(private service: FornecedoresService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.fornecedor.id = Number(this.route.snapshot.paramMap.get("id"))
    this.loadFornecedor()
  }

  loadFornecedor() {
    this.service.findAllFornecedores().subscribe(elements => {
      elements.forEach(fornecedor => {
        if (fornecedor.id == this.fornecedor.id) {
          this.fornecedor = fornecedor
          this.service.findAddress(fornecedor.id!).subscribe(add => {
            this.fornecedor.address = add
          })
        }
      })
    })
  }

  deletar() {
    this.service.deleteFornecedor(this.fornecedor.id!).subscribe(element => {
      this.service.message("Fornecedor "+this.fornecedor.name+" foi deletado com sucesso!", "Dismiss", "success", 3000)
      this.router.navigate(["/fornecedores"]);
    })
  }

  cancelar() {
    this.router.navigate(["/fornecedores"]);
  }
}
