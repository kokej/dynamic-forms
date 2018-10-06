import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { FormGeneratorModule } from '../form-generator/form-generator.module';

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        FormGeneratorModule
    ],
    declarations: [HomeComponent]
})
export class HomeModule { }
