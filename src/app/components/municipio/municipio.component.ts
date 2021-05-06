import { Component, OnInit } from '@angular/core';
import { MunicipioService } from '../../services/municipio.service';
import { Municipio } from '../../models/municipio.model';

@Component({
  selector: 'app-municipio',
  templateUrl: './municipio.component.html',
  styleUrls: ['./municipio.component.scss'],
  //providers: [MunicipioService]
})
export class MunicipioComponent implements OnInit {
  respuesta: Municipio = new Municipio();
  municipio: Municipio = new Municipio();



  constructor(
    private municipioService: MunicipioService
    // private modalService: Municipio
  ) { }


  ngOnInit() { 
    this.municipioService.getAPIData().subscribe(
      (response) => {
        console.log('response is ', response);
        this.respuesta = <Municipio> response;
      },
      (error) => {
        console.log('error en ngOnInit: ', error);
      }
    );
  }
}
