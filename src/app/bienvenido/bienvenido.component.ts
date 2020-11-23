import { Component, OnInit } from '@angular/core';
// import { EstadoActualService } from '../home/estado-actual.service';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css']
})
export class BienvenidoComponent implements OnInit {

  // constructor(private pagina_actual:EstadoActualService) { }
  constructor() { }

  ngOnInit(): void {
    // this.pagina_actual.establecer_pagina_actual('Bienvenido');
    // this.pagina_actual.marcar_actualizado(true);
    // console.log(
    //   "ngOnInit bienvenido.component.ts finalizado y servicio actualizado:" + 
    //   this.pagina_actual.obtener_pagina_actual().toString()
    //   )
  }

}
