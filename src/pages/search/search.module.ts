import { ComponentsModule } from "./../../components/components.module";
import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { SearchPage } from "./search";

@NgModule({
  declarations: [SearchPage],
  imports: [IonicPageModule.forChild(SearchPage), ComponentsModule]
})
export class SearchPageModule {}
