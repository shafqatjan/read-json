import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReadCsvService {
  constructor(private http: HttpClient) { }
  getInfo() {

    return this.http.get('assets/list.csv', { responseType: 'text' });

  }
}
