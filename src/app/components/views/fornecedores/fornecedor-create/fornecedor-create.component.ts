import { Fornecedor } from './../fornecedor.model';
import { Component, OnInit } from '@angular/core';
import { Address } from '../address.model';
import { Router } from '@angular/router';
import { FornecedoresService } from '../fornecedores.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-fornecedor-create',
  templateUrl: './fornecedor-create.component.html',
  styleUrls: ['./fornecedor-create.component.css']
})
export class FornecedorCreateComponent implements OnInit {
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

  //selectedSex = ""

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
  constructor(public dialog: MatDialog, private service: FornecedoresService, private router: Router) { }

  ngOnInit(): void {
  }

  create(): void {
    this.service.createAddress(this.address).subscribe((response) => {
      this.fornecedor.address = response
      this.service.createFornecedor(this.fornecedor).subscribe((response2) => {
        this.service.message("Cadastro do fornecedor foi realizado com sucesso!","Dismiss","success",3000)
        this.navegandoParaFornecedores()
      }, err =>{
        for (let i = 0; i < err.error.errors.length; i++) {
          this.service.message("Error: "+err.error.errors[i].message,"Dismiss","error",3000)
        }
      })
    }, err => {
      for (let i = 0; i < err.error.errors.length; i++) {
        this.service.message("Error:"+err.error.errors[i].message,"Dismiss","error",3000)
      }
    });
  }

  navegandoParaFornecedores() {
    this.router.navigate(["/fornecedores"]);
  }
}
