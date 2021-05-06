import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Municipio} from "../models/municipio.model";
import {endpoints} from '../../environments/endpoints';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MunicipioService {

  constructor(private http: HttpClient) { }

  pruebas(){
    return "soy el servicio de municipios!!";
  }
  getAPIData(){
    return this.http.get(endpoints.municipio)
  }
/*
  getmunicipio():Observable<any> {
    return this.http.get(endpoints.municipio);
  }
  */
}