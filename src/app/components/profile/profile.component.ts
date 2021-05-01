import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user: User;
  name: string;
  email: string;
  old_psw: string;
  new_psw: string;
  repeat_psw: string;

  constructor() {}

  ngOnInit(): void {
    this.name = 'Juan';
    this.email = 'jjrr1307@gmail.com';
  }

  updateName() {
    console.log(this.name);
  }

  updatePsw() {}
}
