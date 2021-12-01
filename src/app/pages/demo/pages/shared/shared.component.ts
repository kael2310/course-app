import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ControlItem } from '@app/models/frontend';
import { regex, regexErrorsMessage } from '@app/shared';

@Component({
    selector: 'app-shared',
    templateUrl: './shared.component.html',
    styleUrls: ['./shared.component.scss'],
})
export class SharedComponent implements OnInit {

    isInline: boolean = true
    regexErrorMessage = regexErrorsMessage;
    items: ControlItem[];
    

    form = this.fb.group({
        email: new FormControl({
            value: '',
            disabled: false
        }, {
            validators: [
                Validators.required,
                Validators.min(3),
                Validators.max(10),
                Validators.minLength(3),
                Validators.maxLength(10),
                Validators.pattern(regex.email)
            ]
        }),
        password: new FormControl(null, {
            validators: [
                Validators.required
            ]
        }),
        checkboxes: [false, {
            validators: [
                Validators.required
            ]
        }],
    })


    constructor(
        private fb: FormBuilder
    ) {
        this.items = [
            { label: 'First', value: 1  },
            { label: 'Second', value: 2 },
            { label: 'Third', value: 3 },
            { label: 'Fourth', value: 4 },
            { label: 'Fifth', value: 5 }
        ];
    }

    ngOnInit(): void {
        
    }

    onFetchValue(){
        this.form.patchValue({
            input: "hello"
        })
    }

    onToggleInline(){
        this.isInline = !this.isInline
    }

    
}
