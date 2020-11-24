import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LeerPreguntasService } from '../servicios/leer-preguntas.service';
import { tipoPYR } from '../usuarios/modelos/tipos-datos';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent implements OnInit {

  preguntasYRespuestas: Array<tipoPYR> = [ ];

  constructor( private servicioPreguntas:LeerPreguntasService) { }

  ngOnInit(): void {
    this.consultarPreguntas();
    console.log('PyR:');
    console.log(this.preguntasYRespuestas);
  }

  consultarPreguntas(){
    this.servicioPreguntas.cargarArchivo().subscribe(
      respuesta => { this.preguntasYRespuestas = respuesta}
    );
  }

  
}
