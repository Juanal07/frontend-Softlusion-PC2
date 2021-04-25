import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginComponent } from 'src/app/login/login.component';



@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})

export class NavBarComponent implements OnInit {
  // estado: boolean = false;
  @ViewChild(LoginComponent) child:LoginComponent;


  constructor() { }

  ngOnInit(): void {
  }

  showLogin(){
    this.child.showPopupLogin();
  }
}
