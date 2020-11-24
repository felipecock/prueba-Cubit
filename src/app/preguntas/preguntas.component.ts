import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { tipoPYR } from '../usuarios/modelos/tipos-datos';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent implements OnInit {

  preguntasYRespuestas: Array<tipoPYR> = [ ];

  constructor( private http:HttpClient) { }

  ngOnInit(): void {
    this.cargarArchivo();
  }

  cargarArchivo(){
    this.http.get('asssets/preguntas-respuestas.json').subscribe(
      (respuesta:any) => { this.preguntasYRespuestas = respuesta.json()}
    )
  }
}
