import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
// import { RegisterService } from '../../services/register.service';
import { Register } from '../../models/register.model';
import { AuthService } from 'src/app/services/auth.service';
import { CommonsService } from 'src/app/services/commons.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  @ViewChild('content') block: ElementRef;
  register: Register = new Register();
  closeResult = '';
  email: string = '';
  password: string = '';
  name: String = '';
  emailRepe: boolean = false;

  constructor(
    // private registerService: RegisterService,
    private modalService: NgbModal,
    private commonsService: CommonsService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  showPopupRegister() {
    this.modalService
      .open(this.block, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
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

  sendRegister() {
    this.emailRepe=false;
    this.register['name'] = this.name;
    this.register['email'] = this.email;
    this.register['password'] = this.password;
    this.authService.postRegister(this.register).subscribe(
      (response) => {
        console.log('response is ', response);
        console.log(response['status'])
          this.commonsService.setName(response['data']['name']);
          this.commonsService.setToken(response['data']['token']);
          this.modalService.dismissAll('Cross click')
      },
      (error) => {
        console.log('error is ', error);
        console.log("error email repe send")
        this.emailRepe=true;
      }
    );
  }

  getEmailRepe(){
    console.log("error email repe bool")
    return this.emailRepe == true;
  }

}