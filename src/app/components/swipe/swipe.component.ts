import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { SwiperComponent } from "swiper/angular";
import Swiper from 'swiper';
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from 'swiper/core';

import { MunicipalityService } from '../../services/municipality.service';
import { Municipio } from '../../models/municipio.model';

SwiperCore.use([Navigation, Pagination]);

@Component({
  selector: 'app-swipe',
  templateUrl: './swipe.component.html',
  styleUrls: ['./swipe.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SwipeComponent implements OnInit {
  idMunicipio: number = 279
  municipio = new Municipio();

  constructor(
    private municipalityService: MunicipalityService
  ) { }

  ngOnInit(): void {

    this.municipalityService
      .getCentrosMedicos(this.idMunicipio)
      .subscribe((response) => {
        // console.log(response);
        this.municipio.medicalcenters = response['data'];
        console.log("CENTROS MEDICOS: ",this.municipio.medicalcenters)
        // console.log("OBJETO: ", response['data'])
      });

  }

}
