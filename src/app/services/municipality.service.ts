import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { endpoints } from '../../environments/endpoints';

@Injectable({
  providedIn: 'root',
})
export class MunicipalityService {
  constructor(private http: HttpClient) {}

  getListaPueblos() {
    return this.http.get(`${endpoints.municipality}/listVillages`);
  }
}
