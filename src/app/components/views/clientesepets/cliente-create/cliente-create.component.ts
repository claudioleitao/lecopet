import { ClientesepetsService } from './../clientesepets.service';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Address } from '../address.model';
import { Client } from '../client.model';
import { MatDialog } from '@angular/material/dialog';
import { DialogClienteComponentComponent } from './dialog-cliente-component/dialog-cliente-component.component';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent implements OnInit {
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

  client: Client = {
    id: 0,
    name: "",
    address: this.address,
    telephone: "",
    email: "",
    sex: "",
    status: false
  }

  constructor(public dialog: MatDialog, private service: ClientesepetsService, private router: Router) { }

  ngOnInit(): void {
  }

  create(): void {
    this.service.createAddress(this.address).subscribe((response) => {
      this.client.address = response
      this.service.createClient(this.client).subscribe((response2) => {
        this.openDialog(response2);
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

  navegandoParaClientesePets() {
    this.router.navigate(["/clientesepets"]);
  }

  navegandoParaPets(client: Client) {
    const navigationExtras: NavigationExtras = {
      state: {client: client}
    }

    this.router.navigate(['/clientesepets/petcreate'], { queryParams: { client: JSON.stringify(client) }});
  }

  openDialog(client: Client) {
    let dialogRef = this.dialog.open(DialogClienteComponentComponent)

    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      if(result == "true")
        this.navegandoParaPets(client);
      else if(result == "false")
        this.navegandoParaClientesePets()
    })
  }
}