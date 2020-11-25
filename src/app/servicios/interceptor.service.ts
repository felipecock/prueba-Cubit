import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})

export class InterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const headers = new HttpHeaders({
      'cubit-test':'@Felipe_Cock'
    });

    const reqClon = req.clone({
      headers
    });

    console.log(`¡¡¡Petición interceptada!!!${reqClon}`);
    return next.handle( reqClon ).pipe(
      catchError(this.manejarError)
    );
  }

  manejarError( error: HttpErrorResponse ){
    console.log('Se detectó un error en la petición al servidor');
    console.log('Registrando los detalles en el archivo de registro. (log)')
    console.warn(error);
    return throwError('Error al conectar con el servicio.')
  }

}
