import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-shared',
    templateUrl: './shared.component.html',
    styleUrls: ['./shared.component.scss'],
})
export class SharedComponent implements OnInit {

    form = this.fb.group({
        input: new FormControl({
            value: '',
            disabled: false
        }, {
            validators: [
                Validators.required
            ]
        })
    })


    constructor(
        private fb: FormBuilder
    ) {}

    ngOnInit(): void {}

    onFetchValue(){
        this.form.patchValue({
            input: "hello"
        })
    }
}
