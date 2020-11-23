import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api.service';
import { InfoUsuario } from '../../modelos/tipos-datos';
// import { EstadoActualService } from 'src/app/home/estado-actual.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  listaUsuarios: Array<InfoUsuario> = [];
  errorHttp: Boolean = false;

  // constructor(private apiservice: ApiService, private pagina_actual:EstadoActualService) { }
  constructor(private apiservice: ApiService) { }

  descargarListaUsuarios() {
    this.apiservice.getUsers().subscribe(
      respuesta => {
        return this.listaUsuarios = respuesta.data;
      },
      respuesta => {
        return this.errorHttp = true;
      }
    );
  }

  ngOnInit() {
    // this.pagina_actual.establecer_pagina_actual('Lista de Usuarios');
    // this.pagina_actual.marcar_actualizado(true);
    // console.log(
    //   "ngOnInit listausuarios.component.ts finalizado y servicio actualizado:" + 
    //   this.pagina_actual.obtener_pagina_actual().toString()
    //   )
    this.descargarListaUsuarios();
  }
}
