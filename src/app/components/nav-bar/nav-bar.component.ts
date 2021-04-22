import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Login } from '../../models/login.model';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  user: string = '';
  password: string = '';
  respuesta: string = '';
  login: Login = new Login();

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  sendLogin() {
    this.login['email'] = this.user;
    this.login['password'] = this.password;
    this.loginService.postAPIData(this.login).subscribe(
      (response) => {
        console.log('response is ', response);
        // this.respuesta = response['result'];
        console.log(this.login['email']);
      },
      (error) => {
        console.log('error is ', error);
      }
    );
  }
  

}
