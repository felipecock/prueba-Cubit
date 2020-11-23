import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstadoActualService {

  pagina_actual:string;
  actualizado:boolean = false;

  constructor() { 
    this.pagina_actual = 'Bienvenido';
  }

  establecer_pagina_actual(_titulo_pagina:string){
    this.pagina_actual = _titulo_pagina;
  }

  obtener_pagina_actual(){
    return this.pagina_actual;
  }

  marcar_actualizado(_actualizado:boolean){
    this.actualizado = _actualizado;
  }

  verificar_actualizado(){
    return this.actualizado;
  }

}
