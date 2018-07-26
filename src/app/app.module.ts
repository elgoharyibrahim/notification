import { SingleProductPage } from "./../pages/single-product/single-product";
import { ProfilePage } from "./../pages/profile/profile";
import { CategoriesAndBrandsPage } from "./../pages/categories-and-brands/categories-and-brands";
import { SearchPage } from "./../pages/search/search";
import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { HttpModule } from "@angular/http";
import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { ListPage } from "../pages/list/list";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { ComponentsModule } from "../components/components.module";
import { ProductServiceProvider } from "../providers/product-service/product-service";
import { CategoriesServiceProvider } from "../providers/categories-service/categories-service";
import { RatingModule } from "ngx-rating";
import { ShopProductServiceProvider } from "../providers/shop-product-service/shop-product-service";
import { RlTagInputModule } from "angular2-tag-input";
import { BrandServiceProvider } from '../providers/brand-service/brand-service';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ProfilePage,
    SingleProductPage,
    CategoriesAndBrandsPage,
    SearchPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, { tabsPlacement: "top" }),
    ComponentsModule,
    HttpModule,
    RatingModule,
    RlTagInputModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ProfilePage,
    SingleProductPage,
    CategoriesAndBrandsPage,
    SearchPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ProductServiceProvider,
    CategoriesServiceProvider,
    ShopProductServiceProvider,
    BrandServiceProvider
  ]
})
export class AppModule {}
