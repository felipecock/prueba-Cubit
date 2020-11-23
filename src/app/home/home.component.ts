import { Component, OnInit } from '@angular/core';
import { EstadoActualService } from './estado-actual.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public _pagina:EstadoActualService) { 
  }

  ngOnInit(): void {

  }

}
