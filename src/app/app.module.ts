import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon'
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';

import { FormsModule } from '@angular/forms';

import { MenucadastrosComponent } from './components/template/nav/menucadastros/menucadastros.component';
import { MenuservicoComponent } from './components/template/nav/menuservico/menuservico.component';
import { MenucomercialComponent } from './components/template/nav/menucomercial/menucomercial.component';
import { MenufinanceiroComponent } from './components/template/nav/menufinanceiro/menufinanceiro.component';
import { MenumaterialComponent } from './components/template/nav/menumaterial/menumaterial.component';
import { ClientesepetsComponent } from './components/views/clientesepets/clientesepets.component';
import { PaineldecontroleComponent } from './components/views/paineldecontrole/paineldecontrole.component';
import { ClienteCreateComponent } from './components/views/clientesepets/cliente-create/cliente-create.component';
import { PetsCreateComponent } from './components/views/clientesepets/pets-create/pets-create.component';
import { PetsDeleteComponent } from './components/views/clientesepets/pets-delete/pets-delete.component';
import { PetsUpdateComponent } from './components/views/clientesepets/pets-update/pets-update.component';
import { ClienteListComponent } from './components/views/clientesepets/cliente-list/cliente-list.component';
import { ClienteDeleteComponent } from './components/views/clientesepets/cliente-delete/cliente-delete.component';
import { ClienteUpdateComponent } from './components/views/clientesepets/cliente-update/cliente-update.component';
import { DialogClienteComponentComponent } from './components/views/clientesepets/cliente-create/dialog-cliente-component/dialog-cliente-component.component';
import { FuncionariosComponent } from './components/views/funcionarios/funcionarios.component';
import { FornecedoresComponent } from './components/views/fornecedores/fornecedores.component';
import { FornecedorCreateComponent } from './components/views/fornecedores/fornecedor-create/fornecedor-create.component';
import { FornecedorDeleteComponent } from './components/views/fornecedores/fornecedor-delete/fornecedor-delete.component';
import { FornecedorUpgradeComponent } from './components/views/fornecedores/fornecedor-upgrade/fornecedor-upgrade.component';
import { ProdutosComponent } from './components/views/produtos/produtos.component';
import { ProdutoCreateComponent } from './components/views/produtos/produto-create/produto-create.component';
import { ProdutoDeleteComponent } from './components/views/produtos/produto-delete/produto-delete.component';
import { ProdutoUpdateComponent } from './components/views/produtos/produto-update/produto-update.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    MenucadastrosComponent,
    MenuservicoComponent,
    MenucomercialComponent,
    MenufinanceiroComponent,
    MenumaterialComponent,
    ClientesepetsComponent,
    PaineldecontroleComponent,
    ClienteCreateComponent,
    PetsCreateComponent,
    PetsDeleteComponent,
    PetsUpdateComponent,
    ClienteListComponent,
    ClienteDeleteComponent,
    ClienteUpdateComponent,
    DialogClienteComponentComponent,
    FuncionariosComponent,
    FornecedoresComponent,
    FornecedorCreateComponent,
    FornecedorDeleteComponent,
    FornecedorUpgradeComponent,
    ProdutosComponent,
    ProdutoCreateComponent,
    ProdutoDeleteComponent,
    ProdutoUpdateComponent
  ],
  entryComponents: [DialogClienteComponentComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatSelectModule,
    MatOptionModule,
    MatSnackBarModule,
    MatDialogModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
