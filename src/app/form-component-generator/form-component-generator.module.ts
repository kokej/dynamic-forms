import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { MaterialModule } from '../ext/material.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { DynamicFieldDirective } from './main/dynamic-field/dynamic-field.directive';
import { DynamicFormComponent } from "./main/dynamic-form/dynamic-form.component";

import { ButtonComponent } from './components/button/button.component'; 
import { CheckboxComponent } from './components/checkbox/checkbox.component'; 
import { DateComponent } from './components/date/date.component'; 
import { InputComponent } from './components/input/input.component';
import { RadioButtonComponent } from './components/radio-button/radio-button.component'; 
import { SelectComponent } from './components/select/select.component';

@NgModule({
  imports: [ 
    FormsModule,
    CommonModule, 
    ReactiveFormsModule, 
    MaterialModule 
  ],
  declarations: [ 
    InputComponent,
    ButtonComponent,
    SelectComponent,
    DateComponent,
    RadioButtonComponent,
    CheckboxComponent,
    DynamicFieldDirective,
    DynamicFormComponent
  ],
  entryComponents: [
    InputComponent,
    ButtonComponent,
    SelectComponent,
    DateComponent,
    RadioButtonComponent,
    CheckboxComponent,
    DynamicFormComponent
  ],
    exports: [
    InputComponent,
    ButtonComponent,
    SelectComponent,
    DateComponent,
    RadioButtonComponent,
    CheckboxComponent,
    DynamicFormComponent
  ]
})
export class FormComponentGeneratorModule { }
