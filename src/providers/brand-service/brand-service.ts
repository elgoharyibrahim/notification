import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs";
import { BRAND } from "../../mocks/brands/brands.mocks";

/*
  Generated class for the BrandServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BrandServiceProvider {
  constructor(public http: Http) {
    console.log("Hello BrandServiceProvider Provider");
  }
  getAllBrand() {
    return BRAND;
  }
}
