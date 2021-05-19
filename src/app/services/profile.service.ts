import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { endpoints } from 'src/environments/endpoints';
import { CommonsService } from './commons.service';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(
    private commonservice: CommonsService,
    private http: HttpClient
  ) {}

  getUser() {
    let httpHeader = { headers: this.commonservice.setHeaders() };
    return this.http.post(`${endpoints.profile}/infoUser`, {}, httpHeader);
  }

  updateUser(name: string, email: string) {
    let httpHeader = { headers: this.commonservice.setHeaders() };
    return this.http.post(
      `${endpoints.profile}/changeData`,
      { name, email },
      httpHeader
    );
  }

  updatePsw(old_psw: string, new_psw: string, new_psw2: string) {
    let httpHeader = { headers: this.commonservice.setHeaders() };
    console.log(old_psw, new_psw);
    return this.http.post(
      `${endpoints.profile}/changePsw`,
      { old_psw, new_psw, new_psw2 },
      httpHeader
    );
  }
}
