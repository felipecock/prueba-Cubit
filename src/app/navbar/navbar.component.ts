import { Component, OnInit } from '@angular/core';
import { LeerPreguntasService } from '../servicios/leer-preguntas.service';
import { tipoPYR } from '../usuarios/modelos/tipos-datos';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  numerales:Array<number> = [];
  errorArchivo:boolean = false;
  estiloCssSubmenu:string = 'submenu-oculto';
  
  constructor(private servicioPreguntas:LeerPreguntasService) { }

  ngOnInit(): void {
    this.consultarPreguntas();
  }
  
  consultarPreguntas(){
    this.servicioPreguntas.cargarArchivo().subscribe(
      respuesta => { this.numerales = this.filtarNumerales(respuesta)},
      respuesta => {this.errorArchivo = true}
    );
  }

  filtarNumerales(objs:Array<tipoPYR>): Array<number>{
    let nums:Array<number> = [];
    for(let obj of objs){
      nums.push(obj.numero);
    }
    return nums;
  }

  alternarSubmenu(){
    if(this.estiloCssSubmenu == 'submenu-oculto'){
      this.estiloCssSubmenu = 'submenu-visible';
    }
    else{
      this.estiloCssSubmenu = 'submenu-oculto';
    }
  }

}
