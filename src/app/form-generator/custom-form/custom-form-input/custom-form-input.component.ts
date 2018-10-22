import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InputBase } from '../../input-base';

@Component({
    selector: 'app-custom-form-input',
    templateUrl: './custom-form-input.component.html'
})

export class CustomFormInputComponent {

    @Input() input: InputBase<any>;
    @Input() form: FormGroup;

    get isValid() {

        return this.form.controls[this.input.key].valid;
    }

}
