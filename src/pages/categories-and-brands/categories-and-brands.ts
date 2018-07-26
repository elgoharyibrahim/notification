import { Category } from "./../../models/categories.interface";
import { Brand } from "./../../models/brands.interface";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { CategoriesServiceProvider } from "./../../providers/categories-service/categories-service";
import { BrandServiceProvider } from "./../../providers/brand-service/brand-service";

/**
 * Generated class for the CategoriesAndBrandsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-categories-and-brands",
  templateUrl: "categories-and-brands.html"
})
export class CategoriesAndBrandsPage {
  category: Category[];
  brand: any[];
  catsName: string[] = [];
  brandName: string[] = [];
  categoryTopics = [];
  brandTopics = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public CategoriesService: CategoriesServiceProvider,
    public BrandService: BrandServiceProvider
  ) {}
  ionViewDidLoad() {
    console.log("ionViewDidLoad CategoriesAndBrandsPage");
    this.getCategory();
    this.getBrand();
  }
  getCategory() {
    console.log("ca");

    this.category = this.CategoriesService.getAllCategory();
    console.log(this.category);
    this.category.forEach(element => {
      this.catsName.push(element.categoryName);
    });
    console.log(this.catsName);
  }
  getBrand() {
    debugger;

    this.brand = this.BrandService.getAllBrand();
    console.log(this.brand);
    this.brand.forEach(element => {
      this.brandName.push(element.brandName);
    });
    console.log(this.brandName);
  }
}
[];
