import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginComponent } from 'src/app/components/login/login.component';
// import { LoginService } from 'src/app/services/login.service';
// import { AuthService } from 'src/app/services/auth.service';
import { CommonsService } from 'src/app/services/commons.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  // estado: boolean = false;
  name: string = '';

  @ViewChild(LoginComponent) child: LoginComponent;

  constructor(
      // private loginService: LoginService, 
      private commonsService: CommonsService, 
      // private authService: AuthService
      ) {}

  ngOnInit(): void {}

  showLogin() {
    this.child.showPopupLogin();
  }

  showName() {
    this.name = this.commonsService.getName();
  }

  getName() {
    return this.commonsService.getName();
  }

  getToken() {
    return this.commonsService.getToken();
  }

  endSession() {
    this.commonsService.endSession();
  }
  isLogged() {
    return this.getName() != '';
  }
}
