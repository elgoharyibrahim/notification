import { NgModule } from "@angular/core";
import { IonicModule } from "ionic-angular";
import { ProductComponent } from "./product/product";
import { ShopProductComponent } from "./shop-product/shop-product";
import { RatingModule } from "ngx-rating";

@NgModule({
  declarations: [ProductComponent, ShopProductComponent],
  imports: [IonicModule, RatingModule],
  exports: [ProductComponent, ShopProductComponent]
})
export class ComponentsModule {}
