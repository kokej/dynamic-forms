import { Injectable } from '@angular/core';
import { InputDropdown } from './components/dropdown';
import { InputBase } from './input-base';
import { InputTextbox } from './components/textbox';
import { InputDatepicker } from './components/datepicker';

@Injectable()
export class InputService {

    // TODO: get from a remote source of input metadata
    // TODO: make asynchronous
    getInputs() {

        const inputs: InputBase<any>[] = [

            new InputDropdown({
                key: 'brave',
                label: 'Bravery Rating',
                options: [
                    { key: 'solid', value: 'Solid' },
                    { key: 'great', value: 'Great' },
                    { key: 'good', value: 'Good' },
                    { key: 'unproven', value: 'Unproven' }
                ],
                order: 3
            }),

            new InputTextbox({
                key: 'firstName',
                label: 'First name',
                value: 'Bombasto',
                required: true,
                validators: ['required'],
                order: 1
            }),

            new InputTextbox({
                key: 'emailAddress',
                label: 'Email',
                type: 'email',
                value: 'a@a.com',
                order: 2
            }),
            new InputDatepicker({
                key: 'creation date',
                label: 'creation date',
                value: '',
                order: 4
            })
        ];

        return inputs.sort((a, b) => a.order - b.order);
    }
}
