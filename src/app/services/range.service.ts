import { Injectable } from '@angular/core';
//import { Headers, Http } from '@angular/http';
import { HttpClient, HttpHeaders }    from '@angular/common/http';

import 'rxjs/add/operator/toPromise';

import { Shell } from '../models/shell'
import { ShellRange } from '../models/shell-range'

@Injectable()
export class ShellRangeService {

  private resourceUrl = 'api/ranges';  // URL to web api
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) {}

  create(name: string): Promise<ShellRange> {
    return this.http
      .post<ShellRange>(this.resourceUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .catch(this.handleError);
  }

  get(): Promise<ShellRange[]> {
    return this.http
      .get<ShellRange[]>(this.resourceUrl)
      .toPromise()
      .catch(this.handleError);
  }

  getById(entityId: number): Promise<ShellRange> {
    const url = `${this.resourceUrl}/${entityId}`;
    return this.http
      .get<ShellRange>(url)
      .toPromise()
      .catch(this.handleError);
  }

  update(hero: ShellRange): Promise<ShellRange> {
    const url = `${this.resourceUrl}/${hero.entityId}`;
    return this.http
      .put<ShellRange>(url, JSON.stringify(hero), {headers: this.headers})
      .toPromise()
      //.then(() => hero)
      .catch(this.handleError);
  }

  delete(entityId: number): Promise<void> {
    const url = `${this.resourceUrl}/${entityId}`;
    return this.http.delete<ShellRange>(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
