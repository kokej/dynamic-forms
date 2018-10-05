import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { FieldConfig, Validator } from '../../interfaces/field.interface';

@Component({
    selector: 'app-dynamic-form',
    templateUrl: './dynamic-form.component.html'
})
export class DynamicFormComponent implements OnInit {

    @Input() fields: FieldConfig[] = [];
    @Output() submit: EventEmitter<any> = new EventEmitter<any>();

    form: FormGroup;

    constructor(
        private _fb: FormBuilder
    ) { }

    get value() {
        return this.form.value;
    }

    bindValidations(validations: any) {

        if (validations.length > 0) {
            const validList = [];
            validations.forEach(valid => {
                validList.push(valid.validator);
            });

            return Validators.compose(validList);
        }

        return null;
    }

    createControl() {
        const group = this._fb.group({});

        this.fields.forEach(field => {

            if (field.type === 'button') {
                return;
            }
            const control = this._fb.control(
                field.value,
                this.bindValidations(field.validations || [])
            );

            group.addControl(field.name, control);
        });

        return group;
    }

    validateAllFormFields(formGroup: FormGroup) {

        Object.keys(formGroup.controls).forEach(field => {
            const control = formGroup.get(field);
            control.markAsTouched({ onlySelf: true });
        });

    }

    onSubmit(event: Event) {
        event.preventDefault();
        event.stopPropagation();

        if (this.form.valid) {
            this.submit.emit(this.form.value);
        } else {
            this.validateAllFormFields(this.form);
        }
    }

    ngOnInit() {
        this.form = this.createControl();
    }

}
