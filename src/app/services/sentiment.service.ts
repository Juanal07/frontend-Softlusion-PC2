import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Sentiment} from "../models/sentiment.model";
import {endpoints} from '../../environments/endpoints';

@Injectable({
  providedIn: 'root'
})
export class SentimentService {

  constructor(private http: HttpClient) { }

  postAPIData(sentiment: Sentiment){
    return this.http.post(endpoints.sentiment, sentiment)
  }
}
