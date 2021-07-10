import { FornecedoresService } from './fornecedores.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Fornecedor } from './fornecedor.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fornecedores',
  templateUrl: './fornecedores.component.html',
  styleUrls: ['./fornecedores.component.css']
})
export class FornecedoresComponent implements OnInit {
  dataSource: MatTableDataSource<Fornecedor>;

  displayedColumns: string[] = ['id', 'nome', 'cnpj', 'endereco', 'nomeresponsavel', 'telefone', 'email', 'actions'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  constructor(private service: FornecedoresService, private router: Router) { }

  ngOnInit(): void {
    this.findAll()
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  navegarParaFornecedorCreate() {
    this.router.navigate(["/fornecedores/create"])
  }

  findAll() {
    this.service.findAllFornecedores().subscribe(response => {
      response.forEach(element => {
        this.service.findAddress(element.id!).subscribe(response1 => {
          element.address = response1
        })
      });
      //this.pets = response;
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
}
