import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tela1Component } from './tela1/tela1.component';
import { Tela2Component } from './tela2/tela2.component';
import { UsersComponent } from './users/users.component';
import { CreateUserComponent } from './users/create-user/create-user.component';

const routes: Routes = [

  {path:'', redirectTo: '/tela1',pathMatch:'full'},
  { path:'tela1', component: Tela1Component },
  { path:'tela2', component: Tela2Component },
  { path:'users', component: UsersComponent },
  { path:'users/create', component: CreateUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
