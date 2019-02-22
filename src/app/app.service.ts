import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  public getJoke() {
    let apiUrl = 'https://api.icndb.com';
    return this.http.get(`${apiUrl}/jokes/random?escape=javascript`);
  }
}
