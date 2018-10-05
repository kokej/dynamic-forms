import { SecondRoutingModule } from './second-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondComponent } from './second/second.component';

import { FormComponentGeneratorModule } from '../form-component-generator/form-component-generator.module';


@NgModule({
  imports: [
    CommonModule,
    SecondRoutingModule,
    FormComponentGeneratorModule
  ],
  declarations: [SecondComponent]
})
export class SecondModule { }
