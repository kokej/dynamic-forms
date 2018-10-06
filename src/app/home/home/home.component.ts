import { Component } from '@angular/core';
import { InputService } from '../../form-generator/input.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    providers: [InputService]
})
export class HomeComponent {
    inputs: any[];

    constructor(service: InputService) {
        this.inputs = service.getInputs();
    }
}
