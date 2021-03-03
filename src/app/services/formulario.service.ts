import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  constructor(private http: HttpClient) { }

  direccionCodigoPostal(codigo:string){
    return this.http.get(`https://blackisp.herokuapp.com/postalCodes/${codigo}`);
  }

  enviarInformacion(data){
    return this.http.post('https://blackisp.herokuapp.com/contact',data);
  }
}
