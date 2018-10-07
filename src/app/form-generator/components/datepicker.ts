import { InputBase } from './../input-base';

export class InputDatepicker extends InputBase<string> {
    controlType = 'datepicker';

    constructor(options: {} = {}) {
        super(options);
    }
}
