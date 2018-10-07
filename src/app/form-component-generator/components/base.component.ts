import { HostBinding } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../interfaces/field.interface';

export class BaseComponent {

    @HostBinding('class') classList;

    field: FieldConfig;
    group: FormGroup;

    constructor() {}

    protected _init() {
        this.classList = this.field.classList ? this.field.classList : 'form-dynamic__input';
    }
}
