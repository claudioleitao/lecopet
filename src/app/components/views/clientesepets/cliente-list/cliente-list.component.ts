import { ClientesepetsService } from './../clientesepets.service';
import { Client } from './../client.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {
  isAtivo = false;
  dataSource: MatTableDataSource<Client>;

  displayedColumns: string[] = ['id', 'cliente', 'endereco', 'telefone', 'email', 'sexo', 'status', 'actions'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private service: ClientesepetsService, private router: Router) { }

  ngOnInit(): void {
    this.loadClientes();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  loadClientes() {
    this.service.findAllClients().subscribe(elements => {
      elements.forEach(element => {
        this.service.findAddress(element.id!).subscribe(add => {
          element.address = add
        })
      })
      this.dataSource = new MatTableDataSource(elements)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  navegarParaClientesePets() {
    this.router.navigate(["/clientesepets"]);
  }
}
