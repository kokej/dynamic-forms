import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base.component';

@Component({
    selector: 'app-date',
    templateUrl: './date.component.html'
})
export class DateComponent extends BaseComponent implements OnInit {

    ngOnInit() {
        this._init();
    }
}
