import { NgModule } from "@angular/core";
import { AngularMaterialModule } from "../angular-material/angular-material.module";
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
    declarations: [
    UserDetailsComponent
  ],  //Components

    imports: [  //Import angular material modules
        AngularMaterialModule

    ], 

    exports: [
      UserDetailsComponent
    ]  //Exports components to AppModule


})
export class ComponentsModule {}