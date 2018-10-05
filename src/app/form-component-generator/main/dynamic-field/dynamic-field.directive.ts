import {
  ComponentFactoryResolver, ComponentRef,
  Directive, Input, OnInit, ViewContainerRef,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../../interfaces/field.interface';
import { InputComponent } from '../../components/input/input.component';
import { ButtonComponent } from '../../components/button/button.component';
import { SelectComponent } from '../../components/select/select.component';
import { DateComponent } from '../../components/date/date.component';
import { RadioButtonComponent } from '../../components/radio-button/radio-button.component';
import { CheckboxComponent } from '../../components/checkbox/checkbox.component';
import { SelectApiComponent } from '../../components/extended/select-api.component';

const componentMapper = {
  input: InputComponent,
  button: ButtonComponent,
  select: SelectComponent,
  date: DateComponent,
  radiobutton: RadioButtonComponent,
  checkbox: CheckboxComponent,
  selectApi: SelectApiComponent
};

@Directive({
  selector: '[appDynamicField]'
})

export class DynamicFieldDirective implements OnInit {

  @Input() field: FieldConfig;
  @Input() group: FormGroup;

  componentRef: any;

  constructor(
    private _resolver: ComponentFactoryResolver,
    private _container: ViewContainerRef
  ) { }

  ngOnInit() {
    const factory = this._resolver.resolveComponentFactory(
      componentMapper[this.field.type]
    );
    this.componentRef = this._container.createComponent(factory);
    this.componentRef.instance.field = this.field;
    this.componentRef.instance.group = this.group;
  }

}