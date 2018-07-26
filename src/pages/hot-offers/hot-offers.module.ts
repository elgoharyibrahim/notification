import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { HotOffersPage } from "./hot-offers";
import { ComponentsModule } from "./../../components/components.module";

@NgModule({
  declarations: [HotOffersPage],
  imports: [IonicPageModule.forChild(HotOffersPage), ComponentsModule]
})
export class HotOffersPageModule {}
