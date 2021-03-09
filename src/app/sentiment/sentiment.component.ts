import { Component, OnInit } from '@angular/core';
import { SentimentService } from './sentiment.service';
import {Sentiment} from "./sentiment.model";


@Component({
  selector: 'app-sentiment',
  templateUrl: './sentiment.component.html',
  styleUrls: ['./sentiment.component.scss']
})
export class SentimentComponent implements OnInit {

  respuesta='';
  textArea='';
  sentiment = new Sentiment;

  constructor(private sentimentService : SentimentService) { }

  ngOnInit() {

  }

  viewSentiment(){
    this.sentiment["text"]=this.textArea;

    this.sentimentService.postAPIData(this.sentiment).subscribe((response)=>{
      console.log('response is ', response)

      this.respuesta=response["result"];

    },(error) => {
      console.log('error is ', error)
    })

  }

}
