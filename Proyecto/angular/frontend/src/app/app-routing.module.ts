import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "././components/login/login.component";
import { TaskComponent } from "././components/task/task.component";
import { RegistroComponent } from "././components/registro/registro.component";
import { PrivateTaskComponent } from "././components/private-task/private-task.component";
import { AuthGuard } from "./auth.guard";
const routes: Routes = [
  { //ruta inicial
    path:'', //dejamos el path vacio
    redirectTo:"/task", //redirecionamos a lo que queramos
    pathMatch:"full" // para que redirecione
  },
  {path:"task",component: TaskComponent},
  {path:"private",component:PrivateTaskComponent,canActivate:[AuthGuard]},
  {path:"login",component:LoginComponent},
  {path:"registro",component:RegistroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
