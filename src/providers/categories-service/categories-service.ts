// import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs";
import { CATEGORY } from "../../mocks/categories/categories.mocks";
/*
  Generated class for the CategoriesServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CategoriesServiceProvider {
  constructor(public http: Http) {
    console.log("Hello CategoriesServiceProvider Provider");
  }
  getAllCategory() {
    return CATEGORY;
  }
}
