import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { endpoints } from '../../environments/endpoints';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  token: string = 'Bearer ' + this.getToken();

  httpHeader = {
    headers: new HttpHeaders({
      authorization: this.token,
    }),
  };

  getToken(): string {
    return localStorage.getItem('token');
  }

  getName() {
    return this.http.post(endpoints.profile, {}, this.httpHeader);
  }
}
