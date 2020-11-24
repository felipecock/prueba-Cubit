import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaUsuariosComponent } from './componentes/lista-usuarios/lista-usuarios.component';
import { DetalleUsuarioComponent } from './componentes/detalle-usuario/detalle-usuario.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    ListaUsuariosComponent,
    DetalleUsuarioComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    ListaUsuariosComponent,
    DetalleUsuarioComponent
  ]
})
export class UsuariosModule {  }
