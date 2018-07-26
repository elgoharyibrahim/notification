import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { WallPage } from "./wall";
import { ComponentsModule } from "./../../components/components.module";

@NgModule({
  declarations: [WallPage],
  imports: [IonicPageModule.forChild(WallPage), ComponentsModule]
})
export class WallPageModule {}
