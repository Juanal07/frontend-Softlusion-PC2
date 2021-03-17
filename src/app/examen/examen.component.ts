import { Component, OnInit } from '@angular/core';
import { ExamenService } from './examen.service';

/* interface frases2{
  [index: string]: duplas;
}

interface duplas {
  frase:string;
  resultado:number;
} */

@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.scss']
})
export class ExamenComponent implements OnInit {
  respuesta = '';
  textArea = '';
  examen = { text: "" };
  media:number =0.0;
  tuplas:{text:string, resultado:number}[]=[];

  

  constructor(private examenService: ExamenService) { }

  ngOnInit(): void {
  }

  agregar() {
    this.tuplas.push({text:this.textArea,resultado:undefined});
    console.log(this.tuplas);
    this.textArea = "";
  }

  analizar() {
    this.media=0;
    for (let i = 0; i < this.tuplas.length; i++) {
      this.examenService.postAPIData({ text: this.tuplas[i]["text"] }).subscribe((response) => {
        this.tuplas[i]["resultado"] = response["result"];
        this.media += this.tuplas[i]["resultado"] / this.tuplas.length;
/*         console.log("La media es: " +  this.media);
        console.log("El resultado es:" +  this.resultados[i]+ " y está en la posicion " +  i); */
      }, (error) => {
        console.log('error is ', error)
      })
    }
    // document.getElementById('media').innerHTML = String(this.media);
  }
}
