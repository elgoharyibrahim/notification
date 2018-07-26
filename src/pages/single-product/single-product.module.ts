import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { SingleProductPage } from "./single-product";
import { ComponentsModule } from "./../../components/components.module";

@NgModule({
  declarations: [SingleProductPage],
  imports: [IonicPageModule.forChild(SingleProductPage), ComponentsModule]
})
export class SingleProductPageModule {}
