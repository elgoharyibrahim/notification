import { Component, Input } from "@angular/core";
import { Product } from "../../models/product.interface";

/**
 * Generated class for the ProductComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: "product",
  templateUrl: "product.html"
})
export class ProductComponent {
  @Input() product: Product;
  constructor() {
    console.log("Hello ProductComponent Component");
  }
  ionViewDidLoad() {
    console.log("view did load");
  }
}
