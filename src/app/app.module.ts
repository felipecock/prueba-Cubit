import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsuariosModule } from './usuarios/usuarios.module';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { ListaUsuariosComponent } from './usuarios/componentes/lista-usuarios/lista-usuarios.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { EstadoActualService } from './home/estado-actual.service';

const rutasApp:Routes = [
  { path:'lista-usuarios', component: ListaUsuariosComponent },
  { path:'preguntas', component: PreguntasComponent },
  { path:'', component: BienvenidoComponent , pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PreguntasComponent,
    BienvenidoComponent,
  ],
  imports: [
    RouterModule.forRoot(rutasApp),
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
