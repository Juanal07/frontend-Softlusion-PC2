import { Component, OnInit } from '@angular/core';
import { SentimentService } from '../../services/sentiment.service';
import { Sentiment } from '../../models/sentiment.model';

@Component({
  selector: 'app-sentiment',
  templateUrl: './sentiment.component.html',
  styleUrls: ['./sentiment.component.scss'],
})
export class SentimentComponent implements OnInit {
  respuesta: string = '';
  textArea: string = '';
  sentiment: Sentiment = new Sentiment();

  constructor(private sentimentService: SentimentService) {}

  ngOnInit() {}

  viewSentiment() {
    this.sentiment['text'] = this.textArea;
    this.sentimentService.postAPIData(this.sentiment).subscribe(
      (response) => {
        console.log('response is ', response);
        this.respuesta = response['result'];
      },
      (error) => {
        console.log('error is ', error);
      }
    );
  }
}
