import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Municipio} from "../models/municipio.model";
import {endpoints} from '../../environments/endpoints';

@Injectable({
  providedIn: 'root'
})
export class MunicipioService {

  constructor(private http: HttpClient) { }

  postAPIData(municipio: Municipio){
    return this.http.post(endpoints.municipio, municipio)
  }
}
