import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExamenService {

  constructor(private http: HttpClient) { }

  postAPIData(examen){
    return this.http.post('http://127.0.0.1:5000/sentiment', examen)
  }

}
  