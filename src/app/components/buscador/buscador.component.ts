import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { MunicipalityService } from '../../services/municipality.service';
import { Autocompletado } from '../../models/autocompletado.model';
import { Municipio } from '../../models/municipio.model'
import { ɵHttpInterceptingHandler } from '@angular/common/http';

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
  texto: string;
  municipio: Municipio;
  idSearch: number;
  idMunicipio: number;

  constructor(private municipalityService: MunicipalityService) {}

  ngOnInit() {
    this.getListaPueblos();

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );
  }

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

  getIdPueblo(pueblo: string){
    let i = 0;
    for (i; i < this.respuesta.length; i++) {
      // console.log(this.respuesta[i]['name'])
      // console.log(pueblo)
      if (this.respuesta[i]['name'] == pueblo) {
        // console.log(this.respuesta[i]['name'])
        // console.log(this.respuesta[i]['idMunicipality'])
        return Number(this.respuesta[i]['idMunicipality']);
      }
    }
  }

  getInfoPueblo(){
    // console.log("hola")
    // console.log(this.getIdPueblo(this.texto))
    this.municipalityService.getBusqueda(this.getIdPueblo(this.texto)).subscribe(
      (response) => {
        // console.log("hola2")
        if (response['status'] == 200){
          this.municipio = response['data']
          console.log(this.municipio)
          // console.log(this.municipio.medicalcenters)
        }else{
          this.idSearch = response['data']['idSearch']
          this.idMunicipio = response['data']['idMunicipality']
          // console.log(this.idSearch)
          // console.log(this.idMunicipio)
          this.municipalityService.getInfoPueblo(this.idMunicipio).subscribe(
            (response) => {
              console.log(response)
            }
          )

          this.municipalityService.getEstaciones(this.idMunicipio).subscribe(
            (response) => {
              console.log(response)
            }
          )

          this.municipalityService.getCentrosMedicos(this.idMunicipio).subscribe(
            (response) => {
              console.log(response)
            }
          )

          this.municipalityService.getSupermercados(this.idMunicipio, this.idSearch).subscribe(
            (response) => {
              console.log(response)
            }
          )

          this.municipalityService.getRestaurantes(this.idMunicipio, this.idSearch).subscribe(
            (response) => {
              console.log(response)
            }
          )

          this.municipalityService.getNoticias(this.idMunicipio, this.idSearch).subscribe(
            (response) => {
              console.log(response)
            }
          )
          // this.municipalityService.getBusqueda(this.getIdPueblo(this.texto)).subscribe(
          //   (response) => {
        }
      }
  
    )
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }
}
