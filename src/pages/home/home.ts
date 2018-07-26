import { WallPage } from "./../wall/wall";
import { Component, ViewChild } from "@angular/core";
import { IonicPage, NavController, NavParams, Tabs } from "ionic-angular";
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  @ViewChild("myTabs") tabRef: Tabs;

  tab1 = "WallPage";
  tab2 = "HotOffersPage";

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    let openTab = this.navParams.get("openTab");
    if (openTab) {
      this.tabRef.select(openTab);
    }
  }
}
