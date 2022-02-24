import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from '../comun/appSettings';
import { Usuario } from 'src/app/model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor(private http: HttpClient) { }
  getData(): Observable<any> {
    return  this.http.post<any>(AppSettings.USUARIO_OBTENER,{usuarioId:'1'})
  }
}
