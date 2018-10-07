import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base.component';

@Component({
    selector: 'app-checkbox',
    templateUrl: './checkbox.component.html'
})
export class CheckboxComponent extends BaseComponent implements OnInit {

    ngOnInit() {
        this._init();
    }
}
