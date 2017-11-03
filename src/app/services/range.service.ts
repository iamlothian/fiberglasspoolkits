import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Shell } from '../models/shell'
import { ShellRange } from '../models/shell-range'

@Injectable()
export class ShellRangeService {

  private resourceUrl = 'api/ranges';  // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {}

  create(name: string): Promise<ShellRange> {
    return this.http
      .post(this.resourceUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as ShellRange)
      .catch(this.handleError);
  }

  get(): Promise<ShellRange[]> {
    return this.http.get(this.resourceUrl)
               .toPromise()
               .then(response => response.json().data as ShellRange[])
               .catch(this.handleError);
  }

  getById(entityId: number): Promise<ShellRange> {
    const url = `${this.resourceUrl}/${entityId}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as ShellRange)
      .catch(this.handleError);
  }

  update(hero: ShellRange): Promise<ShellRange> {
    const url = `${this.resourceUrl}/${hero.entityId}`;
    return this.http
      .put(url, JSON.stringify(hero), {headers: this.headers})
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }

  delete(entityId: number): Promise<void> {
    const url = `${this.resourceUrl}/${entityId}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
