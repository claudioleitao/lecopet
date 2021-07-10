import { Address } from './../address.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../client.model';
import { ClientesepetsService } from '../clientesepets.service';

@Component({
  selector: 'app-cliente-update',
  templateUrl: './cliente-update.component.html',
  styleUrls: ['./cliente-update.component.css']
})
export class ClienteUpdateComponent implements OnInit {
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
    city: "",
    state: "",
    country: ""
  }

  client: Client = {
    id: 0,
    name: "",
    address: {
      id: 0,
      street: "",
      number: 0,
      complement: "",
      neighborhood: "",
      zipCode: "",
      city: "",
      state: "",
      country: ""      
    },
    telephone: "",
    email: "",
    sex: "",
    status: false
  }

  constructor(private service: ClientesepetsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.client.id = Number(this.route.snapshot.paramMap.get("id"))
    this.loadClient()
  }

  loadClient() {
    this.service.findAllClients().subscribe(elements => {
      elements.forEach(cli => {
        if (cli.id == this.client.id) {
          this.client = cli
          this.service.findAddress(cli.id).subscribe(add => {
            this.address = add
          })
        }
      })
    })
  }

  update() {
    this.service.updateClient(this.client).subscribe(element => {
      this.service.updateAddress(this.address).subscribe(element1 => {
        this.service.message("Cliente "+this.client.name+" foi atualizado com sucesso!", "Dismiss", "success", 3000)
        this.router.navigate(["/clientesepets/clienteslist"]);
      })
    })
  }

  cancelar() {
    this.router.navigate(["/clientesepets/clienteslist"]);
  }
}
