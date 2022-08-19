import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tela1Component } from './tela1/tela1.component';
import { Tela2Component } from './tela2/tela2.component';
import { UsersComponent } from './users/users.component';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { UpdateComponent } from './users/update/update.component';
import { DeleteUserComponent } from './users/delete-user/delete-user.component';

const routes: Routes = [

  {path:'', redirectTo: '/tela1',pathMatch:'full'},
  { path:'tela1', component: Tela1Component },
  { path:'tela2', component: Tela2Component },
  { path:'users', component: UsersComponent },
  { path:'users/create', component: CreateUserComponent },
  { path:'users/update/:id', component: UpdateComponent },
  { path:'users/delete/:id', component: DeleteUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
