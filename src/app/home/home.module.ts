import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { FormComponentGeneratorModule } from '../form-component-generator/form-component-generator.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormComponentGeneratorModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
