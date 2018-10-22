export interface Validator {
    name: string;
    validator: any;
    message: string;
}
export enum Type {
    search = 'searchType',
    create = 'createType',
    update = 'updateType',
}
export interface FieldConfig {
    label?: string;
    name?: string;
    inputType?: string;
    classList?: string;
    options?: any[];
    type: string;
    value?: any;
    validations?: Validator[];
    queryString?: string;
    readonly?: boolean;
    required?: boolean;
}
export interface FormData {
    type: Type;
    data: FieldConfig[];
    button: FieldConfig;
}
