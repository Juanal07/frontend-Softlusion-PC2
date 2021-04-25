import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Login } from '../models/login.model';
import { RegisterComponent } from 'src/app/register/register.component';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // @Input() show: boolean;
  user: string = '';
  password: string = '';
  respuesta: string = '';
  login: Login = new Login();
  closeResult = '';
  @ViewChild("content") block: ElementRef;
  @ViewChild(RegisterComponent) child:RegisterComponent;

  constructor(private loginService: LoginService, private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  showRegister(){
    this.child.showPopupRegister();
  }

  showPopupLogin(){
    this.modalService.open(this.block, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
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
