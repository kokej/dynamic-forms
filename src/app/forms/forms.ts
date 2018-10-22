import { Validators } from '@angular/forms';
import { Type, FormData, Validator, FieldConfig } from '../form-component-generator/interfaces/field.interface';

export namespace forms {
    export const createGroup: FormData = {
        type: Type.create,
        data: [
            {
                type: 'input',
                inputType: 'text',
                label: 'to do',
                name: 'to_do',
                required: true,
                validations: [
                    {
                        name: 'required',
                        validator: Validators.required,
                        message: 'to do Required'
                    }
                ]
            },
            {
                type: 'input',
                inputType: 'text',
                label: 'description',
                name: 'description'
            },
            {
                type: 'radiobutton',
                label: 'done',
                name: 'done',
                required: true,
                options: ['yes', 'no'],
                value: 'no'
            },
/*
            {
                type: 'date',
                label: 'fecha de creación',
                name: 'crear_creation_date',
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
                inputType: 'text',
                label: 'id',
                name: 'id'
            },
            {
                type: 'input',
                inputType: 'text',
                label: 'to do',
                name: 'to_do'
            },
            {
                type: 'input',
                inputType: 'text',
                label: 'description',
                name: 'description'
            },
            {
                type: 'radiobutton',
                label: 'done',
                name: 'done',
                options: ['yes', 'no']
            },
            /*
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
            */
        ],
        button: {
            type: 'button',
            label: 'buscar'
        }
    };
    export const updateGroup: FormData = {
        type: Type.search,
        data: [
            {
                type: 'input',
                inputType: 'text',
                label: 'id',
                name: 'id',
                readonly: true,
            },
            {
                type: 'input',
                inputType: 'text',
                label: 'to do',
                name: 'to_do',
                required: true,
                validations: [
                    {
                        name: 'required',
                        validator: Validators.required,
                        message: 'to do Required'
                    }
                ]
            },
            {
                type: 'input',
                inputType: 'text',
                label: 'description',
                name: 'description'
            },
            {
                type: 'radiobutton',
                label: 'done',
                name: 'done',
                options: ['yes', 'no'],
                required: true,
                validations: [
                    {
                        name: 'required',
                        validator: Validators.required,
                        message: 'to do Required'
                    }
                ]
            }
        ],
        button: {
            type: 'button',
            label: 'editar'
        }
    };
}
