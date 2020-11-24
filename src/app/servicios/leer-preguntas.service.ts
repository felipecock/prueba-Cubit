import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpData, tipoPYR } from '../usuarios/modelos/tipos-datos';

@Injectable({
  providedIn: 'root'
})
export class LeerPreguntasService {

  constructor(private http:HttpClient) { }

  public cargarArchivo(): Observable<Array<tipoPYR>>{
    return this.http.get<Array<tipoPYR>>('assets/preguntas-respuestas.json')
  }
}
