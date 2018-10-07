import { Validators } from '@angular/forms';
import { Type, FormData, Validator, FieldConfig } from '../form-component-generator/interfaces/field.interface';

export namespace forms {
    export const searchGroup: FormData = {
        type: Type.search,
        data: [
            {
                type: 'input',
                label: 'id',
                inputType: 'text',
                name: 'id',
                validations: [
                    {
                        name: 'required',
                        validator: Validators.required,
                        message: 'id Required'
                    },
                    {
                        name: 'pattern',
                        validator: Validators.pattern('^[a-zA-Z0-9]*$'),
                        message: 'Alphanumeric only'
                    }
                ]
            },
            {
                type: 'input',
                label: 'descripción',
                inputType: 'text',
                name: 'description'
            },
            {
                type: 'radiobutton',
                label: 'priveq',
                name: 'priveq',
                options: ['si', 'no'],
                value: 'N'
            },
            {
                type: 'date',
                label: 'fecha de creación',
                name: 'creation_date',
                validations: [
                    {
                        name: 'required',
                        validator: Validators.required,
                        message: 'Required creation date'
                    }
                ]
            },
            {
                type: 'select',
                label: 'currency',
                name: 'currency',
                value: 0,
                options: [{ name: 'dolar', id: 'us' }, { name: 'euro', id: 'eu' }],
                queryString: 'https://jsonplaceholder.typicode.com/users'
            },
            {
                type: 'checkbox',
                label: 'active',
                name: 'active',
                value: true
            }
        ],
        button: {
            type: 'button',
            label: 'buscar'
        }
    };
}
