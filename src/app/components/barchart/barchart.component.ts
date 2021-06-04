// import { Component, OnInit } from '@angular/core';
// import { Chart } from 'chart.js'
// // import { Color, Label } from 'ng2-charts';


// @Component({
//   selector: 'app-barchart',
//   templateUrl: './barchart.component.html',
//   styleUrls: ['./barchart.component.scss']
// })
// export class BarchartComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
      
//     var myChart = new Chart("myChart", {
//       type: 'bar',
//       data: {
//           labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//           datasets: [{
//               label: '# of Votes',
//               data: [12, 19, 3, 5, 2, 3],
//               backgroundColor: [
//                   'rgba(255, 99, 132, 0.2)',
//                   'rgba(54, 162, 235, 0.2)',
//                   'rgba(255, 206, 86, 0.2)',
//                   'rgba(75, 192, 192, 0.2)',
//                   'rgba(153, 102, 255, 0.2)',
//                   'rgba(255, 159, 64, 0.2)'
//               ],
//               borderColor: [
//                   'rgba(255, 99, 132, 1)',
//                   'rgba(54, 162, 235, 1)',
//                   'rgba(255, 206, 86, 1)',
//                   'rgba(75, 192, 192, 1)',
//                   'rgba(153, 102, 255, 1)',
//                   'rgba(255, 159, 64, 1)'
//               ],
//               borderWidth: 1
//           }]
//       },
//       options: {
//           scales: {
//               y: {
//                   beginAtZero: true
//               }
//           }
//       }
//   });
//   }

// }
import { Component } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { AdminService } from 'src/app/services/admin.service';

@Component({
      selector: 'app-barchart',
      templateUrl: './barchart.component.html',
      styleUrls: ['./barchart.component.scss']
    })
    export class BarchartComponent{

      usuariosMes: {usuarios: number, mes:number} []

      barChartOptions: ChartOptions = {
        responsive: true,
      };
      barChartLabels: Label[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
      barChartType: ChartType = 'bar';
      barChartLegend = true;
      barChartPlugins = [];

      barChartData: ChartDataSets[] = [
        { data: [], label: 'Usuarios registrados' }
      ];
      public barChartColors = [
        {
          backgroundColor: ['#87DEFF','#87DEFF','#87DEFF','#87DEFF','#87DEFF','#87DEFF','#87DEFF','#87DEFF','#87DEFF','#87DEFF','#87DEFF','#87DEFF','#87DEFF'],
        },
      ];

      constructor(private adminService: AdminService,) {
    
      }
      public ngOnInit(): void {
        this.getUsuariosRegistradosMes()
    
    }

    getUsuariosRegistradosMes() {
      this.adminService.getUsuariosMes().subscribe(
        (response) => {
          // console.log('municipios scrapeados', response);
          this.usuariosMes = response['data'];
          // console.log('municipios scrapeados ', this.usuariosMes)
          let aux = new Array()
          for (let i = 0; i < this.usuariosMes.length; i++){
            aux.push(this.usuariosMes[i]['Usuarios'])
            // console.log('AUX', aux)
            // this.barChartData[0]['data'].append(this.usuariosMes[i]['Usuarios'])
            this.barChartData[0]['data'] = aux
            // console.log('Usuarios ' ,this.usuariosMes[i]['Usuarios'])
          }
          // console.log('Array de usuarios ', this.barChartData[0]['data'])
        },
        (error) => {
          console.log('error is ', error);
        }
      );
    }

}
