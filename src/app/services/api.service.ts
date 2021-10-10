import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  get(url: string, options: any = {}): Promise<any> {
    options.observe = 'response';
    return this.http.get(url, options).toPromise().then(
      response => {
        return response;
      },
      error => {
        return error;
      }
    );
  }

  put(url: string, body: any, options: any = {}): Promise<any> {
    options.observe = 'response';
    return this.http.put(url, body, options).toPromise().then(
      response => {
        return response;
      },
      error => {
        return error;
      }
    );
  }
}
