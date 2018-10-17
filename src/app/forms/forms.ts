import { Validators } from '@angular/forms';
import { Type, FormData, Validator, FieldConfig } from '../form-component-generator/interfaces/field.interface';

export namespace forms {
    export const updateGroup: FormData = {
        type: Type.update,
        data: null,
        button: {
            type: 'button',
            label: 'update'
        }
    };
    export const createGroup: FormData = {
        type: Type.search,
        data: [
            {
                type: 'input',
                label: 'crear',
                inputType: 'text',
                name: 'crear',
                /*                 validations: [
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
                                ] */
            },
            {
                type: 'input',
                label: 'crear descripción',
                inputType: 'text',
                name: 'crear_descripción'
            },
            {
                type: 'radiobutton',
                label: 'priveq',
                name: 'crear_priveq',
                options: ['si', 'no'],
                value: 'N'
            },
            /*             {
                            type: 'date',
                            label: 'fecha de creación',
                            name: 'crear_creation_date',
            /*                 validations: [
                                {
                                    name: 'required',
                                    validator: Validators.required,
                                    message: 'Required creation date'
                                }
                    ]
                    */
            /*
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
            */
        ],
        button: {
            type: 'button',
            label: 'crear'
        }
    };
    export const searchGroup: FormData = {
        type: Type.search,
        data: [
            {
                type: 'input',
                label: 'search',
                inputType: 'text',
                name: 'search',
                /*                 validations: [
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
                                ] */
            },
            {
                type: 'input',
                label: 'search descripción',
                inputType: 'text',
                name: 'search_description'
            },
            {
                type: 'radiobutton',
                label: 'search priveq',
                name: 'search_priveq',
                options: ['si', 'no'],
                value: 'N'
            },
            /*
            {
                type: 'date',
                label: 'fecha de creación',
                name: 'creation_date',
                /*                 validations: [
                                    {
                                        name: 'required',
                                        validator: Validators.required,
                                        message: 'Required creation date'
                                    }
                                ]
                                */
            /*
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
*/
        ],
        button: {
            type: 'button',
            label: 'buscar'
        }
    };
}
