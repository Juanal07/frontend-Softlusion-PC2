import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { endpoints } from '../../environments/endpoints';
import { Login } from '../models/login.model';
import { Register } from '../models/register.model';

@Injectable({
  providedIn: 'root',
})

//login + registro
export class AuthService {
  constructor(private http: HttpClient) {}

  postLogin(login: Login) {
    return this.http.post(endpoints.login, login);
  }
  postRegister(register: Register) {
    return this.http.post(endpoints.register, register);
  }
}
