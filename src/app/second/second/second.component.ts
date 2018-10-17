import { Component, ViewChild, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FormData } from '../../form-component-generator/interfaces/field.interface';
import { DynamicFormComponent } from '../../form-component-generator/main/dynamic-form/dynamic-form.component';
import { SecondChildComponent } from './second-child/second-child.component';
import { forms } from '../../forms/forms';

@Component({
    selector: 'app-second',
    templateUrl: './second.component.html'
})
export class SecondComponent implements OnInit {

    @ViewChild(DynamicFormComponent) form: DynamicFormComponent;

    searchGroup: FormData;
    createGroup: FormData;
    updateGroup: FormData;

    constructor(
        private _dialog: MatDialog
    ) { }

    private mapNewForm(dataGroup: FormData, values) {

        this.updateGroup.data = dataGroup.data.map(control => {
            control.value = values[control.name];
            return control;
        });

        const dialogRef = this._dialog.open(SecondChildComponent, {
            data: this.updateGroup
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed --> ', result);
        });
    }

    onSearch(dataGroup, $event) {
        this.mapNewForm(dataGroup, $event);
    }

    onCreate(dataGroup, $event) {
        this.mapNewForm(dataGroup, $event);
    }

    ngOnInit() {
        this.searchGroup = forms.searchGroup;
        this.createGroup = forms.createGroup;
        this.updateGroup = forms.updateGroup;
    }

}
