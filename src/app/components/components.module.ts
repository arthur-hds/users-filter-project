import { NgModule } from "@angular/core";
import { AngularMaterialModule } from "../angular-material/angular-material.module";
import { UserDetailsComponent } from './user-details/user-details.component';
import { FilterComponent } from './filter/filter.component';
import {FormsModule} from '@angular/forms';
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [         //Components
      UserDetailsComponent,
      FilterComponent
  ],  

    imports: [  //Import angular material modules
        AngularMaterialModule,
        FormsModule,
        CommonModule

    ], 

    exports: [
      UserDetailsComponent,
      FilterComponent
    ]  //Exports components to AppModule


})
export class ComponentsModule {}