import { NgModule } from "@angular/core";

import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
    imports: [  //Import angular material modules
        MatListModule, 
        MatDividerModule, 
        MatInputModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatSelectModule,
        MatButtonModule

    ], 

    exports: [
        MatListModule, 
        MatDividerModule, 
        MatInputModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatSelectModule,
        MatButtonModule

    ],
    providers: [provideNativeDateAdapter()], 

})
export class AngularMaterialModule{}