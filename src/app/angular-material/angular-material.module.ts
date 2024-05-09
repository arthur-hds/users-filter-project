import { NgModule } from "@angular/core";
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
    imports: [  //Import angular material modules
        MatButtonModule, MatListModule, MatDividerModule
    ], 
    exports: [
        MatButtonModule, MatListModule, MatDividerModule
    ] 

})
export class AngularMaterialModule{}