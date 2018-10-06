import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { InputBase } from '../../input-base';
import { InputControlService } from '../../input-control.service';

@Component({
    selector: 'app-custom-form',
    templateUrl: './custom-form.component.html',
    providers: [ InputControlService ]
})

export class CustomFormComponent implements OnInit {

    @Input() inputs: InputBase<any>[] = [];
    form: FormGroup;
    payLoad = '';

    constructor(private _ics: InputControlService) {  }

    ngOnInit() {
      this.form = this._ics.toFormGroup(this.inputs);
    }

    onSubmit() {
      this.payLoad = JSON.stringify(this.form.value);
    }

}
