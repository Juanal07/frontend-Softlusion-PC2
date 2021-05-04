import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';

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

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.auth.getName().subscribe(
      (response) => {
        console.log('response is ', response);
        this.name = response['data']['name'];
        this.email = response['data']['email'];
      },
      (error) => {
        console.log('error is ', error);
      }
    );
  }

  updateName() {
    console.log(this.name);
  }

  updatePsw() {}
}
