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
    options?: string[];
    type: string;
    value?: any;
    validations?: Validator[];
}
export interface FormData {
    type: Type;
    data: FieldConfig[];
}
