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

  @Input() seleccionUsuario: number;
  infoUsuario: InfoUsuario;
  errorHttp: boolean = false;

  constructor(private apiservice: ApiService, private listaUsuarios: ListaUsuariosComponent) {
    this.infoUsuario = { id: 0, email: '', first_name: '', last_name: '', avatar: './assets/profile-default.svg' };
    this.seleccionUsuario = 0;
  }

  descargarInfoUsuario(id: number) {
    if (id != 0) {
      this.apiservice.getUser(id).subscribe(
        respuesta => {
          this.infoUsuario = respuesta.data;
          this.listaUsuarios.claseCssDialogo = 'visible';
          this.listaUsuarios.claseCssCargando = 'oculto';
          return true;
        },
        respuesta => {
          this.errorHttp = true;
          this.listaUsuarios.claseCssDialogo = 'visible';
          this.listaUsuarios.claseCssCargando = 'oculto';
          return false;
        }
      );
      console.log(this.infoUsuario);
      console.log("ngOnInit. FIN");
    }
    this.infoUsuario.avatar = './assets/profile-default.svg';
    return false;
  }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.seleccionUsuario == 0) {
      this.infoUsuario.avatar = './assets/profile-default.svg';
    }
    else {
      this.descargarInfoUsuario(this.seleccionUsuario);
    }
  }

}
