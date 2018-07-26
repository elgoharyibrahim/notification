import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs";
import { SHOPPRODUCT } from "../../mocks/shop-product/shop-product.mocks";

/*
  Generated class for the ShopProductServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ShopProductServiceProvider {
  constructor(public http: Http) {
    console.log("Hello ShopProductServiceProvider Provider");
  }
  getAllShopProduct() {
    return SHOPPRODUCT;
  }
}
