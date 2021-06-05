import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { MunicipalityService } from '../../services/municipality.service';
import { Autocompletado } from '../../models/autocompletado.model';
import { Municipio } from '../../models/municipio.model';
import { delay } from 'rxjs/operators';
import { LoadingService } from '../../services/loading.service';
import { NgbPaginationNumber } from '@ng-bootstrap/ng-bootstrap';

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
  municipio = new Municipio();
  idSearch: number;
  idMunicipio: number;
  topBusquedas: {name: string, shield: string, province: string, ccaa: string, numBusquedas: number} [];

  loading: boolean = false;

  constructor(
    private _loading: LoadingService,
    private municipalityService: MunicipalityService
  ) {}

  ngOnInit() {
    this.listenToLoading();
    this.getListaPueblos();
    this.getTopMunicipios()

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );
  }
  /**
   * Listen to the loadingSub property in the LoadingService class. This drives the
   * display of the loading spinner.
   */
  listenToLoading(): void {
    this._loading.loadingSub
      .pipe(delay(0)) // This prevents a ExpressionChangedAfterItHasBeenCheckedError for subsequent requests
      .subscribe((loading) => {
        this.loading = loading;
      });
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
        // console.log('mis opciones', this.options);
      },
      (error) => {
        console.log('error is ', error);
      }
    );
  }

  getTopMunicipios() {
    this.municipalityService.getTopMunicipios().subscribe(
      (response) => {
        this.topBusquedas = response['data']
        console.log('Municipios Informacion', this.topBusquedas)
        console.log('Nombre', this.topBusquedas[0]['name'])
        console.log('Provincia', this.topBusquedas[0]['province'])
        console.log('CCAA', this.topBusquedas[0]['ccaa'])
        // let aux = new Array()
        // aux = response['data'];
        // for (let i = 0; i < aux.length; i++) {
        //   // console.log(aux[])
        //   this.topBusquedas[i].push(aux[i]['name'])
        //   // this.topBusquedas[i]['nombre'] = aux[i]['name'];
        //   console.log('nombre municipio', this.topBusquedas[i]['nombre']);
        // }
      },
      (error) => {
        console.log('error is ', error);
      }
    );
  }

  getIdPueblo(pueblo: string) {
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

  getInfoPueblo() {
    // console.log("hola")
    // console.log(this.getIdPueblo(this.texto))
    this.municipalityService
      .getBusqueda(this.getIdPueblo(this.texto))
      .subscribe((response) => {
        // console.log("hola2")
        if (response['status'] == 200) {
          this.municipio.name = response['data']['name'];
          this.municipio.shield = response['data']['shield'];
          this.municipio.region = response['data']['region'];
          this.municipio.province = response['data']['province'];
          this.municipio.ccaa = response['data']['ccaa'];
          this.municipio.population = response['data']['population'];
          this.municipio.surface = response['data']['surface'];
          this.municipio.altitude = response['data']['altitude'];
          this.municipio.density = response['data']['density'];
          this.municipio.stations = response['data']['stations'];
          this.municipio.medicalcenters = response['data']['medicalcenters'];
          this.municipio.supermarkets = response['data']['supermarkets'];

          if (response['data']['nRestaurants'] == -10) {
            this.municipio.nRestaurants = 0;
            this.municipio.media = 0;
          } else {
            this.municipio.nRestaurants = response['data']['nRestaurants'];
            this.municipio.media = response['data']['media'];
          }

          if (response['data']['populated'] == 0) {
            this.municipio.unpopulated = 'Pertenece a la España Vaciada';
          } else {
            this.municipio.unpopulated = 'NO pertenece a la España Vaciada';
          }
        } else {
          console.log('ELSEEE');
          this.idSearch = response['data']['idSearch'];
          this.idMunicipio = response['data']['idMunicipality'];
          // console.log(this.idSearch)
          // console.log(this.idMunicipio)
          this.municipalityService
            .getInfoPueblo(this.idMunicipio)
            .subscribe((response) => {
              // console.log("RESPONSEEE: ", response)
              this.municipio = response['data'];
              // console.log(this.municipio.name)
              // console.log(this.municipio.ccaa)
              // console.log(this.municipio.density)
              // console.log(this.municipio.province)
              // console.log(this.municipio.population)

              // this.municipio.name = "hola";
              console.log('OBJETO: ', this.municipio);
            });

          this.municipalityService
            .getEstaciones(this.idMunicipio)
            .subscribe((response) => {
              console.log(response);
              this.municipio.stations = response['data'];
              console.log('ESTACIONES: ', this.municipio.stations);
              console.log('OBJETO: ', response['data']);
            });

          this.municipalityService
            .getCentrosMedicos(this.idMunicipio)
            .subscribe((response) => {
              console.log(response);
              this.municipio.medicalcenters = response['data'];
              // console.log("CENTROS MEDICOS: ",this.municipio.medicalcenters)
              // console.log("OBJETO: ", response['data'])
            });

          this.municipalityService
            .getSupermercados(this.idMunicipio, this.idSearch)
            .subscribe((response) => {
              console.log(response);
              this.municipio.supermarkets = response['data'];
              // console.log("SUPERMERCADOS: ",this.municipio.supermarkets)
              // console.log("OBJETO: ", response['data'])
            });

          this.municipalityService
            .getRestaurantes(this.idMunicipio, this.idSearch)
            .subscribe((response) => {
              console.log(response);
              if (response['data']['nRestaurants'] == -10) {
                this.municipio.nRestaurants = 0;
                this.municipio.media = 0;
              } else {
                this.municipio.nRestaurants = response['data']['nRestaurants'];
                this.municipio.media = response['data']['media'];
              }
              // this.municipio.nRestaurants = response['data']['nRestaurants'];
              // console.log(this.municipio.media)
              // console.log(this.municipio.nRestaurants)
            });

          this.municipalityService
            .getNoticias(this.idMunicipio, this.idSearch)
            .subscribe((response) => {
              console.log(response);
              if (response['data']['populated'] == 0)
                this.municipio.unpopulated = 'Pertenece a la España Vaciada';
              else
                this.municipio.unpopulated = 'NO pertenece a la España Vaciada';
              // this.municipio.unpopulated = response['data']['populated'];
              // console.log("OBJETO: ", this.municipio)
              // console.log(this.municipio.name)
              // console.log(this.municipio.ccaa)
              // console.log(this.municipio.density)
              // console.log(this.municipio.province)
              // console.log(this.municipio.population)
              // console.log(this.municipio.unpopulated)
            });
          // this.municipalityService.getBusqueda(this.getIdPueblo(this.texto)).subscribe(
          //   (response) => {
        }
      });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }
}
