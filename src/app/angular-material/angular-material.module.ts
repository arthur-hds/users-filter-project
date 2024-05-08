import { NgModule } from "@angular/core";
import {MatButtonModule} from '@angular/material/button';


@NgModule({
    imports: [  //Import angular material modules
        MatButtonModule
    ], 
    exports: [
        MatButtonModule
    ] 

})
export class AngularMaterialModule{}