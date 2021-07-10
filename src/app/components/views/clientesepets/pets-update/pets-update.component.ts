import { ClientesepetsService } from './../clientesepets.service';
import { Component, OnInit } from '@angular/core';
import { Address } from '../address.model';
import { Breed } from '../breed.models';
import { Client } from '../client.model';
import { Pet } from '../pet.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pets-update',
  templateUrl: './pets-update.component.html',
  styleUrls: ['./pets-update.component.css']
})
export class PetsUpdateComponent implements OnInit {

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
    address: this.address,
    telephone: "",
    email: "",
    sex: "",
    status: false
  }
  breed: Breed = {
    id: 0,
    name: ""
  }

  pet: Pet = {
    id: 0,
    name: "",
    age: "",
    weight: 0,
    sex: "",
    dead: false,
    breed: this.breed,
    client: this.client
  }

  constructor(private service: ClientesepetsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.pet.id = Number(this.route.snapshot.paramMap.get("id"))
    this.loadPet();
  }

  loadPet() {
    this.service.findPetById(this.pet.id!).subscribe(element => {
      this.pet = element
    })
  }

  update() {
    this.service.updatePet(this.pet).subscribe(element =>{
      this.service.message("Atualização dos dados do Pet "+this.pet.name+" foi realizado com sucesso!", "Dismiss", "success", 3000)
      this.router.navigate(["/clientesepets"]);
    })
  }

  cancelar() {
    this.router.navigate(["/clientesepets"]);
  }
}
