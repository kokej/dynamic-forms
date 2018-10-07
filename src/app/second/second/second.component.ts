import { Component, ViewChild, OnInit } from '@angular/core';
import { FormData } from '../../form-component-generator/interfaces/field.interface';
import { DynamicFormComponent } from '../../form-component-generator/main/dynamic-form/dynamic-form.component';
import { forms } from '../../forms/forms';

@Component({
    selector: 'app-second',
    templateUrl: './second.component.html'
})
export class SecondComponent implements OnInit {

    @ViewChild(DynamicFormComponent) form: DynamicFormComponent;

    searchGroup: FormData;

    constructor() {}

    onSearch($event) {
        console.log('this --> ', this);
        console.log('$event --> ', $event);
    }

    ngOnInit() {
        this.searchGroup = forms.searchGroup;
    }

}
