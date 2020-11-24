import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api.service';
import { HttpData, InfoUsuario } from '../../modelos/tipos-datos';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  listaUsuarios:Array<InfoUsuario> = [];
  errorHttp:boolean = false;
  usuarioSeleccionado:number;
  pagina:number = 1;
  listaUsuariosBloque:HttpData = {
    page: 1,
    per_page: 1,
    total: 1,
    total_pages: 1,
    data: [],
    support: {}
  }
  claseCssCortina:string = 'oculto';
  claseCssCargando:string = 'oculto';
  claseCssDialogo:string = 'oculto';

  constructor(private apiservice: ApiService) { 
    this.usuarioSeleccionado = 0;
  }

  descargarListaUsuarios(_pagina:number) {
    this.apiservice.getUsers(_pagina).subscribe(
      respuesta => {
        this.listaUsuariosBloque = respuesta;
        return this.listaUsuarios = respuesta.data;
      },
      respuesta => {
        return this.errorHttp = true;
      }
    );
  }

  ngOnInit() {
    this.descargarListaUsuarios(this.pagina);
  }

  public seleccionarUsuario(id:number) {
    this.usuarioSeleccionado = id;
  }

  public obtenerId() {
    return this.usuarioSeleccionado;
  }

  public Arreglar(length: number): Array<any> {
    if (length >= 0) {
      console.log(new Array(length))
      return new Array(length);
    }
    return [];
  }

  public estaActiva(pag:number){
    if(pag == this.listaUsuariosBloque.page){
      return 'activa'
    }
    return ''
  }

}
