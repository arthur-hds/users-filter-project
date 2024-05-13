import { NgModule } from "@angular/core";
import { AngularMaterialModule } from "../angular-material/angular-material.module";
import { UserDetailsComponent } from './user-details/user-details.component';
import { FilterComponent } from './filter/filter.component';
import {FormsModule} from '@angular/forms';
import { CommonModule } from "@angular/common";
import { UsersListComponent } from './users-list/users-list.component';
import { PipesModule } from "../pipes/pipes.module";

@NgModule({
    declarations: [         //Components
      UserDetailsComponent,
      FilterComponent,
      UsersListComponent
  ],  

    imports: [  //Import angular material modules
        AngularMaterialModule,
        FormsModule,
        CommonModule,
        PipesModule

    ], 

    exports: [
      UserDetailsComponent,
      FilterComponent,
      UsersListComponent
    ]  //Exports components to AppModule


})
export class ComponentsModule {}