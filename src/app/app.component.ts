import { CategoriesAndBrandsPage } from "./../pages/categories-and-brands/categories-and-brands";
import { SearchPage } from "./../pages/search/search";
import { SingleProductPage } from "./../pages/single-product/single-product";
import { Component, ViewChild } from "@angular/core";
import { Nav, Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

import { HomePage } from "../pages/home/home";
import { ListPage } from "../pages/list/list";
import { ProfilePage } from "../pages/profile/profile";

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  pages: Array<{ title: string; component: any; openTab?: any }>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: "Home", component: HomePage },
      { title: "Profile", component: ProfilePage },
      { title: "SingleProduct", component: SingleProductPage },
      { title: "search", component: SearchPage },
      { title: "categories-brands", component: CategoriesAndBrandsPage },
      { title: "List", component: ListPage, openTab: 1 }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component, { openTab: page.openTab });
  }
}
