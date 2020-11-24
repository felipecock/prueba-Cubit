import { Component, OnInit } from '@angular/core';
// import { PreguntasComponent } from '../preguntas/preguntas.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  numerales:Array<number> = [];
  constructor() { }

  ngOnInit(): void {
    // this.numerales = this.preguntas.preguntasYRespuestas
  }

}
