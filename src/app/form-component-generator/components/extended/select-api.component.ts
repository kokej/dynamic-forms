import { Component, OnInit } from '@angular/core';
import { SelectComponent } from '../select/select.component';
import { FieldConfig } from '../../interfaces/field.interface';

@Component({
    selector: 'app-select-api',
    templateUrl: './select-api.component.html'
})

export class SelectApiComponent extends SelectComponent implements OnInit {

    constructor() {
        super();
    }

    ngOnInit() {

    }
}
