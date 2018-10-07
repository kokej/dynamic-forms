import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base.component';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html'
})
export class InputComponent extends BaseComponent implements OnInit {

    ngOnInit() {
        this._init();
    }
}
