import { ClientesepetsService } from './../clientesepets.service';
import { Component, OnInit } from '@angular/core';
import { Breed } from '../breed.models';
import { Client } from '../client.model';
import { Pet } from '../pet.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from '../address.model';

@Component({
  selector: 'app-pets-delete',
  templateUrl: './pets-delete.component.html',
  styleUrls: ['./pets-delete.component.css']
})
export class PetsDeleteComponent implements OnInit {
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

  deletar() {
    this.service.deletePet(this.pet.id!).subscribe(element => {
      this.service.message("O Pet "+this.pet.name+" foi deletado com sucesso!", "Dismiss", "success", 3000)
      this.router.navigate(["/clientesepets"]);
    })
  }

  cancelar() {
    this.router.navigate(["/clientesepets"]);
  }
}
