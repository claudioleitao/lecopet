import { ClientesepetsService } from './../clientesepets.service';
import { Component, OnInit } from '@angular/core';
import { Breed } from '../breed.models';
import { Client } from '../client.model';
import { Pet } from '../pet.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { delay } from 'rxjs/operators'

@Component({
  selector: 'app-pets-create',
  templateUrl: './pets-create.component.html',
  styleUrls: ['./pets-create.component.css']
})

export class PetsCreateComponent implements OnInit {
  id_cliente: number | undefined = 0;
  id_breed: number | undefined = 0;
  isAddClient = false;
  
  client!: Client
  clients: Client[] = []
  
  breed: Breed = {
    name: ""
  }
  breeds: Breed[] = []


  pet: Pet = {
    name: "",
    age: "",
    weight: 0,
    sex: "",
    dead: false,
    breed: this.breed,
    client: this.client
  }

  constructor(private service: ClientesepetsService, private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe((res) => {
      if (res.client != null) {
        this.client = JSON.parse(res.client);
        this.id_cliente = this.client.id
        this.clients.push(this.client)
        this.isAddClient = true;
      } else {
        this.loadClients()
      }
    })
  }

  ngOnInit(): void {
    this.loadBreeds();
  }

  salvar() {
    if (!this.id_cliente && !this.id_breed) {
      this.service.message("Error: Selecione o dono do Pet. Error: Selecione a raça do animal.","Dismiss","error",3000)
      return;
    } else if (!this.id_cliente) {
      this.service.message("Error: Selecione o dono do Pet.","Dismiss","error",3000)
      return;
    } else if (!this.id_breed) {
      this.service.message("Error: Selecione a raça do animal.","Dismiss","error",3000)
      return;
    }

    this.clients.forEach(element1 => {
      if (element1.id == this.id_cliente) {
        this.pet.client = element1;
        this.breeds.forEach(element2 => {
          if (element2.id == this.id_breed) {
            this.pet.breed = element2;
            this.service.createPet(this.pet).subscribe(element => {
              if (this.isAddClient)
                this.service.message("Cadastro de Cliente e Pet realizado com sucesso!","Dismiss","success",3000)
              else
                this.service.message("Cadastro de Pet realizado com sucesso!","Dismiss","success",3000)
              delay(5000); this.router.navigate(["/clientesepets"]);
            }, err => {
              for (let i = 0; i < err.error.errors.length; i++) {
                this.service.message("Error:"+err.error.errors[i].message,"Dismiss","error",3000)
              }
            })
          }
        })
      }
    })
  }

  navegandoParaClientesePets() {
    this.router.navigate(["/clientesepets"]);
  }

  loadClients() {
    this.service.findAllClients().subscribe(element => {
      this.clients = element;
    })
  }

  loadBreeds() {
    this.service.findAllBreeds().subscribe(element => {
      this.breeds = element;
    })
  }
}
