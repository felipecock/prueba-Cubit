import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api.service';
import { InfoUsuario } from '../../modelos/tipos-datos';
import { ListaUsuariosComponent } from '../lista-usuarios/lista-usuarios.component';

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.component.html',
  styleUrls: ['./detalle-usuario.component.css']
})
export class DetalleUsuarioComponent implements OnInit {

  @Input() seleccionUsuario:number;
  infoUsuario: InfoUsuario;
  errorHttp: boolean = false;

  constructor(private apiservice:ApiService, private listaUsuarios:ListaUsuariosComponent) {
    this.infoUsuario = { id: 0, email: '', first_name: '', last_name: '', avatar: '' };
    this.seleccionUsuario = 0;
  }

  descargarInfoUsuario(id: number) {
    this.apiservice.getUser(id).subscribe(
      respuesta => {
        return this.infoUsuario = respuesta.data;
      },
      respuesta => {
        return this.errorHttp = true;
      }
    );
    console.log(this.infoUsuario);
    console.log("ngOnInit. FIN");
  }

  ngOnInit() {
  }
  
  ngOnChanges() {
    this.descargarInfoUsuario(this.seleccionUsuario);
    this.listaUsuarios.claseCssDialogo = 'visible';
    this.listaUsuarios.claseCssCargando = 'oculto';
  }
  
}
