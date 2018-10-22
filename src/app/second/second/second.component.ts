import { Component, ViewChild, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { FormData } from '../../form-component-generator/interfaces/field.interface';
import { DynamicFormComponent } from '../../form-component-generator/main/dynamic-form/dynamic-form.component';
import { SecondChildComponent } from './second-child/second-child.component';
import { forms } from '../../forms/forms';
import { ApiService } from './../../services/api.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
    selector: 'app-second',
    templateUrl: './second.component.html'
})
export class SecondComponent implements OnInit {

    @ViewChild(DynamicFormComponent) forms: DynamicFormComponent;

    searchGroup: FormData;
    createGroup: FormData;
    updateGroup: FormData;
    resultList;
    columnsToDisplay = ['id', 'to_do', 'description', 'done', 'delete'];

    constructor(
        private _api: ApiService,
        private _dialog: MatDialog,
        private _snackBar: MatSnackBar,
        private _utils: UtilsService
    ) { }


    private onSearch($event?) {
        let values = null;

        if ($event && $event.value && !this._utils._checkIfNullSearch($event.value)) {
            values = $event.value;
        }

        return this._api.getData(values).subscribe(data => {
            this.resultList = [...data];
        });
    }

    private  onCreate($event) {

        return this._api.createData(['id', 'to_do'], $event).subscribe(
            result => this.onSearch(),
            error => {
                return this._snackBar.open('item already exists', null, {
                    duration: 1000,
                });
            }
        );
    }

    private  onUpdate(item) {
        const dialogRef = this._dialog.open(SecondChildComponent, {
            data: item
        });

        dialogRef.afterClosed().subscribe(result => {
            this.onSearch();
        });

    }

    private onDelete($event, item) {
        $event.preventDefault();
        $event.stopPropagation();

        return this._api.deleteData(item).subscribe(data => {
            this.onSearch();
        });
    }

    private onChanges($event): void {
        this.onSearch($event);
    }

    ngOnInit() {
        this.searchGroup = forms.searchGroup;
        this.createGroup = forms.createGroup;
        this.updateGroup = forms.updateGroup;
        this.onSearch();
    }

}
