import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class ApiService {

    constructor(
        private _http: HttpClient
    ) { }

    getItems(queryString) {
        return this._http.get(queryString);
    }
}
