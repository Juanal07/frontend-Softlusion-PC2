import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-tablas',
  templateUrl: './tablas.component.html',
  styleUrls: ['./tablas.component.scss'],
})
export class TablasComponent implements OnInit {
  public data: any[];
  public toolbar: string[];
  public selectOptions: Object;
  public editSettings: Object;
  constructor() { }

  ngOnInit(): void {
    this.selectOptions = { persistSelection: true };
    this.editSettings = { allowDeleting: true };
    this.toolbar = ['Search', 'Delete'];
    this.data = [{'OrderID': 10, 'CustomerName': 'HOLA1', 'OrderDate': '10/2/4', 'Freight': 'HOLA34', 'ShippedDate': 'ALVARITO', 'ShipCountry': 'ADIOS1'},
                 {'OrderID': 9, 'CustomerName': 'HOLA2', 'OrderDate': '10/2/6', 'Freight': 'HOLA55', 'ShippedDate': 'HOLA', 'ShipCountry': 'ADIOS2'},       
                 {'OrderID': 5, 'CustomerName': 'HOLA3', 'OrderDate': '10/2/8', 'Freight': 'HOLA33', 'ShippedDate': 'HOLA', 'ShipCountry': 'ADIOS3'},
                 {'OrderID': 6, 'CustomerName': 'HOLA4', 'OrderDate': '10/2/10', 'Freight': 'HOLA22', 'ShippedDate': 'HOLA', 'ShipCountry': 'ADIOS4'},
                 {'OrderID': 1, 'CustomerName': 'HOLA5', 'OrderDate': '10/2/12', 'Freight': 'HOLA11', 'ShippedDate': 'HOLA', 'ShipCountry': 'ADIOS5'},]
  }

}
