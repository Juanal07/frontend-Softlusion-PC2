import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Login } from '../../models/login.model';
import { RegisterComponent } from 'src/app/components/register/register.component';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // @Input() show: boolean;
  user: string = '';
  name: string = '';
  password: string = '';
  respuesta: string = '';
  login: Login = new Login();
  closeResult: string = '';
  @ViewChild("content") block: ElementRef;
  @ViewChild(RegisterComponent) child:RegisterComponent;  //hijo referenciado 

  constructor(private loginService: LoginService, private modalService: NgbModal) { }

  ngOnInit(): void {
    if (this.name !=''){
      localStorage.setItem('name','');
      this.name = localStorage.getItem('name');
    }
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
    if (this.name !=''){
      localStorage.setItem('name','');
      this.name = localStorage.getItem('name');
    }
    this.login['email'] = this.user;
    this.login['password'] = this.password;
    this.loginService.postAPIData(this.login).subscribe(
      (response) => {
        console.log('response is ', response);
        // this.respuesta = response['result'];
        localStorage.setItem('name',response['data']['name'])

        this.name = localStorage.getItem('name')
        console.log("Ususario logeado: ", this.name)
        // console.log(this.login['email']);
      },
      (error) => {
        console.log('error is ', error);
      }
    );
  }
}
