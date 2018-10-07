import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base.component';

@Component({
    selector: 'app-radio-button',
    templateUrl: './radio-button.component.html'
})
export class RadioButtonComponent extends BaseComponent implements OnInit {

    ngOnInit() {
        this._init();
    }
}
