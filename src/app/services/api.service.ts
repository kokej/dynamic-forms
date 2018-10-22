import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    id = 1;
    currentItem;
    formdb = [
        {
            description: 'work on crud implementation',
            done: 'yes',
            id: 1,
            to_do: 'CRUD'
        },
        {
            description: 'afterviewinit rendering internal error',
            done: 'no',
            id: 2,
            to_do: 'fix bug'
        },
        {
            description: 'tidy up the kitchen',
            done: 'no',
            id: 3,
            to_do: 'do the dishes'
        },
        {
            description: 'water the plants',
            done: 'no',
            id: 4,
            to_do: 'plants'
        }

    ];
    constructor() { }

    private getIndex(item) {

        return this.formdb.findIndex((obj => obj.id === item.id));
    }

    matchOne(field, value) {

        return this.formdb.filter(item => {
            if (value.controls[field] && value.controls[field].value) {
                return item[field] === value.controls[field].value;
            }
        });
    }

    search(values) {

        const filterKeys = Object.keys(values);

        return this.formdb.filter(item => {
            return filterKeys.some((keyName) => {
                if (values[keyName]) {
                    return item[keyName].toString().toLowerCase().indexOf(values[keyName].toString().toLowerCase()) > -1;
                }
            });
        });
    }

    getData(values) {

        return !values ? of(this.formdb) : of(this.search(values));
    }

    createData(fieldsArray, item) {

        let valid = true;
        let error = '';

        fieldsArray.forEach(field => {
            if (this.matchOne(field, item).length > 0) {
                valid = false;
                error = field;
            }
        });

        if (!valid) {
            return throwError(new Error(`item already exists (${error})`));
        }

        delete this.currentItem;
        this.currentItem = item.value;
        this.currentItem.id = this.formdb.length + 1;
        this.formdb.push(this.currentItem);

        return of(this.currentItem);
    }

    updateData(item) {

        const objIndex = this.getIndex(item);

        Object.keys(this.formdb[objIndex]).forEach((key) => {
            this.formdb[objIndex][key] = item[key];

            return this.formdb[objIndex];
        });

        return of(this.formdb[objIndex]);
    }

    deleteData(item) {

        const objIndex = this.getIndex(item);
        this.formdb.splice(objIndex, 1);

        return of(item);
    }

}
