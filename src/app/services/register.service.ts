import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Login} from "../models/login.model";
import {endpoints} from '../../environments/endpoints';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  postAPIData(login: Login){
    return this.http.post(endpoints.login, login)
  }
}
