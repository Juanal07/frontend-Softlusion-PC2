import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Register } from '../models/register.model';
import { endpoints } from '../../environments/endpoints';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient) {}

  postAPIData(register: Register) {
    return this.http.post(endpoints.register, register);
  }
}
