import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../form-component-generator/components/select/mock/api.service';
import { BaseComponent } from '../base.component';


@Component({
    selector: 'app-select',
    templateUrl: './select.component.html'
})
export class SelectComponent extends BaseComponent implements OnInit {

    options;

    constructor(
        private _api: ApiService
    ) {
        super();
    }

    ngOnInit() {
        this._init();

        if (this.field.queryString) {
            return this._api.getItems(this.field.queryString).subscribe(res =>
                this.options = res
            );
        } else {
            this.options = this.field.options;
        }
    }

}
