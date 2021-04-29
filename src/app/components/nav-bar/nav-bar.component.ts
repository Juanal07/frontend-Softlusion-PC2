import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginComponent } from 'src/app/components/login/login.component';
import { LoginService } from 'src/app/services/login.service';



@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})

export class NavBarComponent implements OnInit {
  // estado: boolean = false;
  name: string = '';
  @ViewChild(LoginComponent) child:LoginComponent;


  constructor(private loginService: LoginService) { }

  ngOnInit(): void {

  }

  showLogin(){
    this.child.showPopupLogin();
  }

  showName(){
    this.name = this.loginService.getName();
  }

  getName(){
    return this.loginService.getName();
  }


}
