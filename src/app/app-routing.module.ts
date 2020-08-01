import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ToDoListComponent } from './core/to-do-list/to-do-list.component';


const routes: Routes = [
  {path: '', redirectTo: 'todo/ALL', pathMatch: 'full'},
  {path: 'todo/:filter', component: ToDoListComponent},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
