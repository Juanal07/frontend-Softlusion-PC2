import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { endpoints } from '../../environments/endpoints';
import { CommonsService } from './commons.service';

@Injectable({
  providedIn: 'root',
})
export class MunicipalityService {
  constructor(private http: HttpClient, private commonservice: CommonsService,) {}

  getListaPueblos() {
    return this.http.get(`${endpoints.municipality}/listVillages`);
  }

  getBusqueda(idMunicipality: number) {
    let httpHeader = { headers: this.commonservice.setHeaders() };
    return this.http.post(`${endpoints.municipality}/busqueda`, {idMunicipality}, httpHeader);
  }

  getInfoPueblo(idMunicipality: number) {
    let httpHeader = { headers: this.commonservice.setHeaders() };
    return this.http.post(`${endpoints.municipality}/infoPueblo`, {idMunicipality}, httpHeader);
  }

  getEstaciones(idMunicipality: number) {
    let httpHeader = { headers: this.commonservice.setHeaders() };
    return this.http.post(`${endpoints.municipality}/stations`, {idMunicipality}, httpHeader);
  }

  getCentrosMedicos(idMunicipality: number) {
    let httpHeader = { headers: this.commonservice.setHeaders() };
    return this.http.post(`${endpoints.municipality}/medicalcenters`, {idMunicipality}, httpHeader);
  }

  getSupermercados(idMunicipality: number, idSearch: number) {
    let httpHeader = { headers: this.commonservice.setHeaders() };
    return this.http.post(`${endpoints.municipality}/supermarkets`, {idMunicipality, idSearch}, httpHeader);
  }

  getRestaurantes(idMunicipality: number, idSearch: number) {
    let httpHeader = { headers: this.commonservice.setHeaders() };
    return this.http.post(`${endpoints.municipality}/restaurants`, {idMunicipality, idSearch}, httpHeader);
  }

  getNoticias(idMunicipality: number, idSearch: number) {
    let httpHeader = { headers: this.commonservice.setHeaders() };
    return this.http.post(`${endpoints.municipality}/news`, {idMunicipality, idSearch}, httpHeader);
  }
}
