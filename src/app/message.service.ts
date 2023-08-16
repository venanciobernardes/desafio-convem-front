import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs'
import { MessageModel } from './message/message.model';
import { APIResponseModel } from './api-response.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private client: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  baseurl = 'http://localhost:4001/';

  sendAnswer(message: MessageModel): Observable<APIResponseModel> {
    var response = this.client.post<APIResponseModel>(
      `${this.baseurl}message`, JSON.stringify(message), this.httpOptions);

    return response;
  }
}