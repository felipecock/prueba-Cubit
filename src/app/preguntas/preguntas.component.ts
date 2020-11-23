import { Component, OnInit } from '@angular/core';
import { EstadoActualService } from '../home/estado-actual.service';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent implements OnInit {

  constructor(private pagina_actual:EstadoActualService) { }

  ngOnInit(): void {
    this.pagina_actual.establecer_pagina_actual('PreguntasRespuestas');
  }

}
