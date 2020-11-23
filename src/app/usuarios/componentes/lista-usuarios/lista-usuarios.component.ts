import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api.service';
import { InfoUsuario } from '../../modelos/tipos-datos';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  listaUsuarios: Array<InfoUsuario> = [];
  errorHttp: Boolean = false;

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
    console.log(this.listaUsuarios);
    console.log("ngOnInit. FIN");
  }

  ngOnInit() {
    this.descargarListaUsuarios();
  }
}
