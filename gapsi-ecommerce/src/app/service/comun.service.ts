import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from '../comun/appSettings';
import { Config } from '../model/config';

@Injectable({
  providedIn: 'root'
})
export class ComunService {

  constructor(private http: HttpClient) { }
  getData(): Observable<any> {
    return  this.http.get(AppSettings.COMUN_CONFIG)
  }
}
