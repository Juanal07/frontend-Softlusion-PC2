import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { endpoints } from 'src/environments/endpoints';

@Injectable({
  providedIn: 'root'
})
export class CommonsService {

  constructor(private http: HttpClient) { }

  setName(name: string) {
    localStorage.setItem('name', name);
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }
  getToken(): string {
    return localStorage.getItem('token');
  }
  getName() {
    return localStorage.getItem('name');
  }

  endSession() {
    localStorage.setItem('name', '');
    localStorage.setItem('token', '');
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
