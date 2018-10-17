import { Component, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DynamicFormComponent } from '../../../form-component-generator/main/dynamic-form/dynamic-form.component';
import { FormData } from './../../../form-component-generator/interfaces/field.interface';

@Component({
    selector: 'app-second-child',
    templateUrl: './second-child.component.html',
    styleUrls: ['./second-child.component.css']
})
export class SecondChildComponent {

    @ViewChild(DynamicFormComponent) form: DynamicFormComponent;

    constructor(
        public dialogRef: MatDialogRef<SecondChildComponent>,
        @Inject(MAT_DIALOG_DATA) public updateGroup: FormData
    ) {}

    onUpdate(dataGroup, $event) {
        console.log(dataGroup, $event);
        this.dialogRef.close();
    }

}
