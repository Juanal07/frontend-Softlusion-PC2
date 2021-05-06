import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { endpoints } from '../../environments/endpoints';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  getToken(): string {
    return localStorage.getItem('token');
  }

  getUser() {
    let httpHeader = {
      headers: new HttpHeaders({
        authorization: `Bearer ${this.getToken()}`,
      }),
    };
    return this.http.post(endpoints.profile, {}, httpHeader);
  }

  updateUser(name: string, email: string) {
    let httpHeader = {
      headers: new HttpHeaders({
        authorization: `Bearer ${this.getToken()}`,
      }),
    };
    return this.http.post(
      `${endpoints.profile}/changeData`,
      { name, email },
      httpHeader
    );
  }
}
