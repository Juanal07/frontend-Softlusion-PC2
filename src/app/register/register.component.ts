import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { RegisterService } from '../services/register.service';
import { Register } from '../models/register.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @ViewChild("content") block: ElementRef;
  register: Register = new Register();
  closeResult = '';
  email: string = '';
  password: string = '';
  name: String = '';


  constructor(private registerService: RegisterService, private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  showPopupRegister(){
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

  sendRegister() {
    this.register['name'] = this.name;
    this.register['email'] = this.email;
    this.register['password'] = this.password;
    this.registerService.postAPIData(this.register).subscribe(
      (response) => {
        console.log('response is ', response);
        // this.respuesta = response['result'];
        // console.log(this.login['email']);
      },
      (error) => {
        console.log('error is ', error);
      }
    );
  }
}
