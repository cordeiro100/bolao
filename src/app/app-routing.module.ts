import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './views/admin/admin.component';
import { ApostaComponent } from './views/aposta/aposta.component';
import { CadastroComponent } from './views/cadastro/cadastro.component';
import { HomeComponent } from './views/home/home.component';
import { TabelaComponent } from './views/tabela/tabela.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "cadastro", component: CadastroComponent},
  {path: 'tabela', component: TabelaComponent},
  {path: 'aposta', component: ApostaComponent},
  {path: 'admin', component: AdminComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
