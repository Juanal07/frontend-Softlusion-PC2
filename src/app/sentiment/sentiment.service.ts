import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Sentiment} from "./sentiment.model";

@Injectable({
  providedIn: 'root'
})
export class SentimentService {

  constructor(private http: HttpClient) { }

  postAPIData(sentiment: Sentiment){
    return this.http.post('http://127.0.0.1:5000/sentiment', sentiment)
  }
}
