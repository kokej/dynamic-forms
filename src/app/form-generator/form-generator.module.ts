import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../ext/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CustomFormComponent } from './custom-form/custom-form/custom-form.component';
import { CustomFormInputComponent } from './custom-form/custom-form-input/custom-form-input.component';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        MaterialModule
    ],
    declarations: [
        CustomFormComponent,
        CustomFormInputComponent
    ],
    entryComponents: [
        CustomFormComponent,
        CustomFormInputComponent
    ],
    exports: [
        CustomFormComponent,
        CustomFormInputComponent
    ]
})

export class FormGeneratorModule { }
