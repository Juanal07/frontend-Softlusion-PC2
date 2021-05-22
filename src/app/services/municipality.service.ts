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
    // let httpHeader = { headers: this.commonservice.setHeaders() };
    // return this.http.post(`${endpoints.municipality}/busqueda`, {idMunicipality}, httpHeader);
    return this.http.post(`${endpoints.municipality}/busqueda`, {idMunicipality});
  }

  getInfoPueblo(idMunicipality: number) {
    // let httpHeader = { headers: this.commonservice.setHeaders() };
    // return this.http.post(`${endpoints.municipality}/infoPueblo`, {idMunicipality}, httpHeader);
    return this.http.post(`${endpoints.municipality}/infoPueblo`, {idMunicipality});
  }

  getEstaciones(idMunicipality: number) {
    // let httpHeader = { headers: this.commonservice.setHeaders() };
    // return this.http.post(`${endpoints.municipality}/stations`, {idMunicipality}, httpHeader);
    return this.http.post(`${endpoints.municipality}/stations`, {idMunicipality});
  }

  getCentrosMedicos(idMunicipality: number) {
    // let httpHeader = { headers: this.commonservice.setHeaders() };
    // return this.http.post(`${endpoints.municipality}/medicalcenters`, {idMunicipality}, httpHeader);
    return this.http.post(`${endpoints.municipality}/medicalcenters`, {idMunicipality});
  }

  getSupermercados(idMunicipality: number, idSearch: number) {
    // let httpHeader = { headers: this.commonservice.setHeaders() };
    // return this.http.post(`${endpoints.municipality}/supermarkets`, {idMunicipality, idSearch}, httpHeader);
    return this.http.post(`${endpoints.municipality}/supermarkets`, {idMunicipality, idSearch});
  }

  getRestaurantes(idMunicipality: number, idSearch: number) {
    // let httpHeader = { headers: this.commonservice.setHeaders() };
    // return this.http.post(`${endpoints.municipality}/restaurants`, {idMunicipality, idSearch}, httpHeader);
    return this.http.post(`${endpoints.municipality}/restaurants`, {idMunicipality, idSearch});
  }

  getNoticias(idMunicipality: number, idSearch: number) {
    // let httpHeader = { headers: this.commonservice.setHeaders() };
    // return this.http.post(`${endpoints.municipality}/news`, {idMunicipality, idSearch}, httpHeader);
    return this.http.post(`${endpoints.municipality}/news`, {idMunicipality, idSearch});
  }
}
