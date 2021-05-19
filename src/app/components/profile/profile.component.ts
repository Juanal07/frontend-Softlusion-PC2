import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { CommonsService } from 'src/app/services/commons.service';
import { ProfileService } from 'src/app/services/profile.service';

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

  constructor(
    private commonsService: CommonsService,
    private profileService: ProfileService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.profileService.getUser().subscribe(
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

  updateUser() {
    this.profileService.updateUser(this.name, this.email).subscribe(
      (response) => {
        console.log('response is ', response);
        console.log(response['data']['name']);
        this.commonsService.setName(response['data']['name']);
      },
      (error) => {
        console.log('error is ', error);
      }
    );
  }

  updatePsw() {
    this.profileService
      .updatePsw(this.old_psw, this.new_psw, this.repeat_psw)
      .subscribe(
        (response) => {
          console.log('response is: ', response);
        },
        (error) => {
          console.log('error is ', error);
        }
      );
  }
}
