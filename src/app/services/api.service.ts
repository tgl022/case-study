import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Http, Response, RequestOptions} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ApiService {

  constructor(public http:Http) { };

  public get (url: string, params: any = {}): Promise<any> {
    const promise: Promise<any> = this.http.get(url)
      .map(res => {
        return res.ok ? res.json() : res
      }).toPromise();

    return promise;
  }

}
