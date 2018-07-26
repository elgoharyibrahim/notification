import { Component, Input } from "@angular/core";
import { ShopProduct } from "../../models/shop-product.interface";
import { RatingModule } from "ngx-rating";

/**
 * Generated class for the ShopProductComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: "shop-product",
  templateUrl: "shop-product.html"
})
export class ShopProductComponent {
  @Input() shopproduct: ShopProduct;

  starsCount: number = 4.5;

  constructor() {
    console.log("Hello ShopProductComponent Component");
  }
}
