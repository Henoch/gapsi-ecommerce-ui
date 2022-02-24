import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from '../comun/appSettings';
import { Proveedor } from '../model/proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  constructor(private http: HttpClient) { }
  getDataAll(): Observable<any> {
    return  this.http.get(AppSettings.PROVEEDOR_TODOS)
  }

  guardar(proveedor:Proveedor): Observable<any> {
    return this.http.post<any>(AppSettings.PROVEEDOR_GUARDAR, proveedor);
  }

  borrar(proveedor:Proveedor): Observable<any> {
    return this.http.post<any>(AppSettings.PROVEEDOR_ELIMINAR, proveedor);
  }
}
