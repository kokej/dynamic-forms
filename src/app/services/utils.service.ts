import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class UtilsService {
    constructor() { }
    public _checkIfNullSearch(values) {
        return Object.keys(values).every((k) => {
            return !values[k];
        });
    }
}
