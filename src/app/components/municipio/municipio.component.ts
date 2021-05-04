import { Component, OnInit } from '@angular/core';
import { MunicipioService } from '../../services/municipio.service';
import { Municipio } from '../../models/municipio.model';

@Component({
  selector: 'app-municipio',
  templateUrl: './municipio.component.html',
  styleUrls: ['./municipio.component.scss'],
})
export class MunicipioComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
