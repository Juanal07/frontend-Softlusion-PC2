import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Login} from "../models/login.model";
import {endpoints} from '../../environments/endpoints';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  postAPIData(login: Login){
    return this.http.post(endpoints.login, login)
  }

 setName(name: string){
   localStorage.setItem('name', name);
 }
 
 getName(){
   return localStorage.getItem('name');
 }
}
