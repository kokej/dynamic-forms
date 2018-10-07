import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base.component';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html'
})
export class ButtonComponent extends BaseComponent implements OnInit {

    ngOnInit() {
        this._init();
    }
}
