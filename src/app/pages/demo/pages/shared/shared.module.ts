import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { ButtonModule, ButtonsModule } from '@app/shared';
import { ControlsModule, FormFieldModule } from '@app/shared/controls';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [SharedComponent],
    imports: [
        CommonModule,
        SharedRoutingModule,
        ButtonsModule,
        ControlsModule,
        ReactiveFormsModule,
        FormFieldModule
    ],
})
export class SharedModule {}
