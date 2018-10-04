import { Injectable } from '@angular/core';
import { of } from "rxjs";
import { res } from './res';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor() { }

  getItems() {
    return of(res);
  }


}