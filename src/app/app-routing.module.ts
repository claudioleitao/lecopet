import { ProdutoUpdateComponent } from './components/views/produtos/produto-update/produto-update.component';
import { ProdutoDeleteComponent } from './components/views/produtos/produto-delete/produto-delete.component';
import { ProdutoCreateComponent } from './components/views/produtos/produto-create/produto-create.component';
import { ProdutosComponent } from './components/views/produtos/produtos.component';
import { FornecedorUpgradeComponent } from './components/views/fornecedores/fornecedor-upgrade/fornecedor-upgrade.component';
import { FornecedorDeleteComponent } from './components/views/fornecedores/fornecedor-delete/fornecedor-delete.component';
import { FornecedorCreateComponent } from './components/views/fornecedores/fornecedor-create/fornecedor-create.component';
import { FornecedoresComponent } from './components/views/fornecedores/fornecedores.component';
import { ClienteUpdateComponent } from './components/views/clientesepets/cliente-update/cliente-update.component';
import { ClienteDeleteComponent } from './components/views/clientesepets/cliente-delete/cliente-delete.component';
import { ClienteListComponent } from './components/views/clientesepets/cliente-list/cliente-list.component';
import { PetsUpdateComponent } from './components/views/clientesepets/pets-update/pets-update.component';
import { PetsDeleteComponent } from './components/views/clientesepets/pets-delete/pets-delete.component';
import { PetsCreateComponent } from './components/views/clientesepets/pets-create/pets-create.component';
import { ClienteCreateComponent } from './components/views/clientesepets/cliente-create/cliente-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesepetsComponent } from './components/views/clientesepets/clientesepets.component';
import { PaineldecontroleComponent } from './components/views/paineldecontrole/paineldecontrole.component';

const routes: Routes = [
  {
    path: '',
    component: PaineldecontroleComponent
  },
  {
    path: 'clientesepets',
    component: ClientesepetsComponent
  },
  {
    path: 'clientesepets/clientcreate',
    component: ClienteCreateComponent
  },
  {
    path: 'clientesepets/petcreate',
    component: PetsCreateComponent
  },
  {
    path: 'clientesepets/petdelete/:id',
    component: PetsDeleteComponent
  },
  {
    path: 'clientesepets/petupdate/:id',
    component: PetsUpdateComponent
  },
  {
    path: 'clientesepets/clienteslist',
    component: ClienteListComponent
  },
  {
    path: 'clientesepets/clientedelete/:id',
    component: ClienteDeleteComponent
  },
  {
    path: 'clientesepets/clienteupdate/:id',
    component: ClienteUpdateComponent
  },
  {
    path: 'fornecedores',
    component: FornecedoresComponent
  },
  {
    path: 'fornecedores/create',
    component: FornecedorCreateComponent
  },
  {
    path: 'fornecedores/delete/:id',
    component: FornecedorDeleteComponent
  },
  {
    path: 'fornecedores/update/:id',
    component: FornecedorUpgradeComponent
  },
  {
    path: 'produtos',
    component: ProdutosComponent
  },
  {
    path: 'produtos/create',
    component: ProdutoCreateComponent
  },
  {
    path: 'produtos/delete/:id',
    component: ProdutoDeleteComponent
  },
  {
    path: 'produtos/update/:id',
    component: ProdutoUpdateComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
