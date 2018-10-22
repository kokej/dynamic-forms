import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondRoutingModule } from './second-routing.module';
import { SecondComponent } from './second/second.component';
import { SecondChildComponent } from './second/second-child/second-child.component';
import { FormComponentGeneratorModule } from '../form-component-generator/form-component-generator.module';
import { MaterialModule } from '../ext/material.module';

@NgModule({
    imports: [
        CommonModule,
        SecondRoutingModule,
        FormComponentGeneratorModule,
        MaterialModule
    ],
    declarations: [
        SecondComponent,
        SecondChildComponent
    ],
    entryComponents: [
        SecondChildComponent
    ]
})
export class SecondModule { }
