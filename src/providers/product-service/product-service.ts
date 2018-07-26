// import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs";
import { PRODUCT } from "../../mocks/product/product.mocks";
/*
  Generated class for the ProductServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductServiceProvider {
  constructor(public http: Http) {
    console.log("Hello ProductServiceProvider Provider");
  }
  //: Observable<any>
  getAllProduct() {
    return PRODUCT;
  }
}
