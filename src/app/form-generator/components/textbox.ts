import { InputBase } from './../input-base';

export class InputTextbox extends InputBase<string> {
    controlType = 'textbox';
    type: string;

    constructor(options: {} = {}) {
        super(options);
        this.type = options['type'] || '';
    }
}
