import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { DetalleUsuarioComponent } from './usuarios/componentes/detalle-usuario/detalle-usuario.component';
import { ListaUsuariosComponent } from './usuarios/componentes/lista-usuarios/lista-usuarios.component';

const routes: Routes = [
  { path:'lista-usuarios', component: ListaUsuariosComponent },
  { path:'detalle-usuario', component: DetalleUsuarioComponent },
  { path:'preguntas', component: PreguntasComponent },
  { path:'', component: BienvenidoComponent , pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
