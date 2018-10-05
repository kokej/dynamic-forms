import { Component, ViewChild, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FieldConfig } from '../../form-component-generator/interfaces/field.interface';
import { DynamicFormComponent } from '../../form-component-generator/main/dynamic-form/dynamic-form.component';
import { ApiService } from '../../form-component-generator/components/select/mock/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

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
                type: 'select',
                label: 'currency',
                name: 'currency',
                value: this.currencies && this.currencies[0] ? this.currencies[0] : '',
                options: this.currencies
            },
            {
                type: 'button',
                label: 'buscar'
            }
        ];
    }

}
