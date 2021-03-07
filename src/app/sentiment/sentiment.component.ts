import { Component, OnInit } from '@angular/core';
import { RootService } from './root.service';


@Component({
  selector: 'app-sentiment',
  templateUrl: './sentiment.component.html',
  styleUrls: ['./sentiment.component.scss']
})
export class SentimentComponent implements OnInit {

  texto="asdf";

  constructor(private rootService : RootService) { }

  ngOnInit() {
    this.rootService.getAPIData().subscribe((response)=>{
      console.log('response is ', response)
      // this.texto=response[1].name;

    },(error) => {
      console.log('error is ', error)
    })

    this.rootService.postAPIData().subscribe((response)=>{
      console.log('response is ', response)
      this.texto=response["result"];

    },(error) => {
      console.log('error is ', error)
    })

  }

}
