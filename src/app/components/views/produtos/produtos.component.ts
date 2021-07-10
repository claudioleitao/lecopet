import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Produto } from './produto.model';
import { ProdutosService } from './produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  dataSource: MatTableDataSource<Produto>;

  displayedColumns: string[] = ['id', 'nome', 'description', 'barCode', 'provider', 'actions'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private service: ProdutosService, private router: Router) { }

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

  navegarParaProdutoCreate() {
    this.router.navigate(["/produtos/create"])
  }

  findAll() {
    this.service.findAllProdutos().subscribe(response => {
      //this.pets = response;
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
}
