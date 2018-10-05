import { Component, ViewChild, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FieldConfig } from '../../form-component-generator/interfaces/field.interface';
import { DynamicFormComponent } from '../../form-component-generator/main/dynamic-form/dynamic-form.component';
import { ApiService } from '../../form-component-generator/components/select/mock/api.service';

@Component({
    selector: 'app-second',
    templateUrl: './second.component.html'
})
export class SecondComponent implements OnInit {

    @ViewChild(DynamicFormComponent) form: DynamicFormComponent;

    searchGroup: FieldConfig[];
    currencies: any[];

    constructor(
        private _api: ApiService
    ) {
        _api.getItems().subscribe(res =>
            this.currencies = res['resList']
        );
    }

    onSearch($event) {
        console.log('this --> ', this);
        console.log('$event --> ', $event);
    }

    ngOnInit() {

        this.searchGroup = [
            {
                type: 'input',
                label: 'id',
                inputType: 'text',
                name: 'id',
                validations: [
                    {
                        name: 'required',
                        validator: Validators.required,
                        message: 'id Required'
                    },
                    {
                        name: 'pattern',
                        validator: Validators.pattern('^[a-zA-Z0-9]*$'),
                        message: 'Alphanumeric only'
                    }
                ]
            },
            {
                type: 'input',
                label: 'descripción',
                inputType: 'text',
                name: 'description',
                validations: [
                    {
                        name: 'required',
                        validator: Validators.required,
                        message: 'description Required'
                    },
                    {
                        name: 'pattern',
                        validator: Validators.pattern('^[a-zA-Z0-9]*$'),
                        message: 'Alphanumeric only'
                    }
                ]
            },
            {
                type: 'radiobutton',
                label: 'priveq',
                name: 'priveq',
                options: ['si', 'no'],
                value: 'N'
            },
            {
                type: 'date',
                label: 'fecha de creación',
                name: 'creation_date',
                validations: [
                    {
                        name: 'required',
                        validator: Validators.required,
                        message: 'Required creation date'
                    }
                ]
            },
            {
                type: 'select',
                label: 'currency',
                name: 'currency',
                value: this.currencies && this.currencies[0] ? this.currencies[0] : '',
                options: this.currencies
            },
            {
                type: 'checkbox',
                label: 'active',
                name: 'active',
                value: true
            },
            {
                type: 'button',
                label: 'buscar'
            }
        ];
    }

}
