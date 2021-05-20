import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { MunicipalityService } from '../../services/municipality.service';
import { Autocompletado } from '../../models/autocompletado.model';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss'],
})
export class BuscadorComponent implements OnInit {
  myControl = new FormControl();
  options = [];
  respuesta: Autocompletado[];
  filteredOptions: Observable<string[]>;

  constructor(private municipalityService: MunicipalityService) {}

  getListaPueblos() {
    this.municipalityService.getListaPueblos().subscribe(
      (response) => {
        // console.log('response is ', response);
        this.respuesta = response['data'];
        console.log('mis opciones', this.respuesta[0]['name']);
        // this.options[0] = this.respuesta[0]['name'];
        // this.options[1] = this.respuesta[1]['name'];
        let i = 0;
        for (i; i < this.respuesta.length; i++) {
          this.options[i] = this.respuesta[i]['name'];
        }
        console.log('mis opciones', this.options);
      },
      (error) => {
        console.log('error is ', error);
      }
    );
  }

  ngOnInit() {
    this.getListaPueblos();

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }
}
