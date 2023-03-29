import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//HttpClient
@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {}
  postData(sendData: object, callback: Function, makeUnvisible: Function) {
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    this.http
      .post(
        'http://localhost:3000/',
        sendData,
        // .post('https://server-node-jhzh.onrender.com/', sendData,
        { headers: headers }
      )
      .subscribe({
        next: (data: any) => {
          callback(data);
          makeUnvisible();
        },
        error: (error) => console.log(error),
      });
  }
}
