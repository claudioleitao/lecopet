import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ClientesepetsService } from './clientesepets.service';
import { Pet } from './pet.model';

@Component({
  selector: 'app-clientesepets',
  templateUrl: './clientesepets.component.html',
  styleUrls: ['./clientesepets.component.css']
})
export class ClientesepetsComponent implements OnInit {
  //pets: Pet[] = [];
  dataSource: MatTableDataSource<Pet>;

//  displayedColumns: string[] = ['id', 'cliente', 'endereco', 'telefone', 'pet', 'raca', 'status', 'actions'];
  displayedColumns: string[] = ['id', 'pet', 'raca', 'sexo', 'idade', 'peso', 'dono', 'telefone', 'email', 'actions'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private service: ClientesepetsService, private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  navegarParaClienteCreate() {
    this.router.navigate(["clientesepets/clientcreate"]);
  }

  navegandoParaPets() {
    this.router.navigate(["clientesepets/petcreate"]);
  }

  navegandoParaClientesList() {
    this.router.navigate(["clientesepets/clienteslist"]);
  }

  findAll() {
    this.service.findAllPets().subscribe(response => {
      response.forEach(element => {
        this.service.findBreed(element.id).subscribe(response => {
          response.forEach(response2 => {
            element.breed = response2;
          })
        });
        
        this.service.findClient(element.id).subscribe(response => {
          response.forEach(response2 => {
            this.service.findAddress(response2.id).subscribe(response3 => {
              element.client.address = response3
            })
            element.client = response2
          })
        })
      })
      //this.pets = response;
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
}
