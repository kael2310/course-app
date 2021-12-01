import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter,
    forwardRef,
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { ControlItem, Value } from '@app/models/frontend';
export { ControlItem, Value } from '@app/models/frontend';

@Component({
    selector: 'app-checkboxes',
    templateUrl: './checkboxes.component.html',
    styleUrls: ['./checkboxes.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => CheckboxesComponent),
            multi: true,
        },
    ],
})
export class CheckboxesComponent implements OnInit, ControlValueAccessor {
    @Input() items: string
    @Input('value') _value = false;
    onChange: any = () => {};
    onTouched: any = () => {};

    //value: boolean;
    isDisabled: boolean;

    get value() {
        return this._value;
    }

    set value(val) {
        this._value = val;
        this.onChange(val);
        this.onTouched();
    }

    constructor() {}

    ngOnInit(): void {}

    //private propagateChange: any = () => {};

    writeValue(value): void {
        if (value) {
            this.value = value;
          }
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    setDisabledState(isDisabled: boolean): void {
        this.isDisabled = isDisabled;
    }

    // onChanged(value: boolean): void {
    //     const selected = value;

    //     this.value = selected;
    //     this.propagateChange(selected);
    //     this.changed.emit(selected);
    // }

    onChanged(){
        this.value = !this.value;
    }

    isChecked(): boolean {
        return this.value;
    }
}
