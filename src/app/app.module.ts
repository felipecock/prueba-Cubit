import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsuariosModule } from './usuarios/usuarios.module';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { EstadoActualService } from './home/estado-actual.service';
import { DetalleUsuarioComponent } from './usuarios/componentes/detalle-usuario/detalle-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PreguntasComponent,
    BienvenidoComponent,
    DetalleUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    UsuariosModule
  ],
  providers: [
    EstadoActualService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
