import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpData, InfoUsuario } from '../modelos/tipos-datos';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private ServerUrl = "https://reqres.in/api"; // URL del API a consumir

  constructor(private http: HttpClient) {}

  // Método para solicitarle al servidor la lista de usuarios
  public getUsers(): Observable<HttpData> {
    return this.http.get<HttpData>(this.ServerUrl + '/users');
  }

  // Método para solicitar la información detallada de un usuario en específico 
  public getUser(n:number): Observable<HttpData> {
    return this.http.get<HttpData>(this.ServerUrl + '/users/' + n.toString())
  }
  
}

