import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export type PasswordType = 'password' | 'text';

@Component({
    selector: 'app-password',
    templateUrl: './password.component.html',
    styleUrls: ['./password.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => PasswordComponent),
            multi: true
        },
    ],
})
export class PasswordComponent implements OnInit, ControlValueAccessor {

    @Input() placeholder: string

    value: string;
    isDisabled: boolean;
    passwordType: PasswordType

    private onChange: any = () => {};
    private onTouched: any = () => {};

    constructor() {
        this.passwordType = 'password';
    }

    writeValue(value: any): void {
        this.value = value
    }

    registerOnChange(fn: any): void {
        this.onChange =  fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    setDisabledState?(isDisabled: boolean): void {
        this.isDisabled = isDisabled
    }

    onKeyUp(value){
        this.onChange(value);
    }

    onBlur(){
        this.onTouched();
    }

    onTogglePasswordType(){
        this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
    }

    ngOnInit(): void {}
}
