import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
// import 'rxjs/Rx';

export interface IMockData {
  getMockData(url: string): Observable<ROP.IYouTubeVideo>;
}

@Injectable()
export class appMockData {
  constructor(
    private http: Http
  ) {}
  getMockData(url: string): Observable<ROP.IYouTubeVideo> {
    return this.http.get(url)
      .map(this.extractData)
      .catch(this.handleError);
  };
   private extractData(res: Response) {
    let body = res.json();
    return body as ROP.IYouTubeVideo || { };
  }
  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
