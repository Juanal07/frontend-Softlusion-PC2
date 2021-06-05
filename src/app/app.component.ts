import { Component, HostListener, OnInit } from '@angular/core';
import { AuthService } from '../app/services/auth.service';
import { CommonsService } from '../app/services/commons.service';

export enum KEY_CODE {
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37,
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private authService: AuthService,
    private commonsService: CommonsService
  ) {}
  title = 'Softlusion';

  @HostListener('window:beforeunload', ['$event'])
  beforeunloadHandler(event) {
    console.log('mando el http');
    this.authService.postendSession().subscribe(
      () => {
        console.log('se registra el logout en BBDD');
      },
      (error) => {
        console.log('error is ', error);
      }
    );
    this.commonsService.endSession();
    console.log('se borran el localHost');
  }
}
