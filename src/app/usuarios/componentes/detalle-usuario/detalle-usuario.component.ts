import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api.service';
import { InfoUsuario } from '../../modelos/tipos-datos';

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.component.html',
  styleUrls: ['./detalle-usuario.component.css']
})
export class DetalleUsuarioComponent implements OnInit {

  infoUsuario: InfoUsuario = { id: -1, email: '', first_name: '', last_name: '', avatar: '' };
  errorHttp: Boolean = false;

  constructor(private apiservice: ApiService) { }

  descargarInfoUsuario(n: number) {
    this.apiservice.getUser(n).subscribe(
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
    this.descargarInfoUsuario(5);
  }
  
}
