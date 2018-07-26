import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { CategoriesAndBrandsPage } from "./categories-and-brands";
import { RlTagInputModule } from "angular2-tag-input";

@NgModule({
  declarations: [CategoriesAndBrandsPage],
  imports: [IonicPageModule.forChild(CategoriesAndBrandsPage), RlTagInputModule]
})
export class CategoriesAndBrandsPageModule {}
