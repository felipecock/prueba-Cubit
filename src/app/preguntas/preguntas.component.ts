import { Component, OnInit } from '@angular/core';
// import { EstadoActualService } from '../home/estado-actual.service';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent implements OnInit {

  // constructor(private pagina_actual:EstadoActualService) { }
  constructor() { }

  ngOnInit(): void {
    // this.pagina_actual.establecer_pagina_actual('Preguntas y Respuestas');
    // this.pagina_actual.marcar_actualizado(true);
    // console.log(
    //   "ngOnInit preguntas.component.ts finalizado y servicio actualizado:" + 
    //   this.pagina_actual.obtener_pagina_actual().toString()
    //   )
  }
}
