import { Component, Inject, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DynamicFormComponent } from '../../../form-component-generator/main/dynamic-form/dynamic-form.component';
import { FormData } from './../../../form-component-generator/interfaces/field.interface';
import { ApiService } from '../../../services/api.service';
import { forms } from './../../../forms/forms';

@Component({
    selector: 'app-second-child',
    templateUrl: './second-child.component.html',
    styleUrls: ['./second-child.component.css']
})
export class SecondChildComponent implements AfterViewInit {

    @ViewChild(DynamicFormComponent) form: DynamicFormComponent;
    updateGroup: FormData;

    private setFormValues(formData: FormData) {
        const mappedForm = formData.data;
/*         const objIndex = formData.findIndex((obj => obj.id == 1));
        formData[objIndex].name = "Laila" */

        return formData;
    }

    constructor(
        public _api: ApiService,
        public dialogRef: MatDialogRef<SecondChildComponent>,
        @Inject(MAT_DIALOG_DATA) public data
    ) {
        this.updateGroup = this.setFormValues(forms.updateGroup);
    }

    onUpdate($event) {
        console.log($event);
        this._api.updateData($event.value).subscribe(data => {
            this.dialogRef.close(data);
        });
    }

    ngAfterViewInit() {
        for (const control in this.form.form.controls) {
            if (this.form.form.controls[control]) {
                this.form.form.controls[control].setValue(this.data[control]);
            }
        }
    }

}
