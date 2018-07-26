import { Component, ViewChild } from "@angular/core";
import { IonicPage, NavController, NavParams, Slides } from "ionic-angular";
import { RatingModule } from "ngx-rating";
import { Product } from "./../../models/product.interface";
import { ProductServiceProvider } from "./../../providers/product-service/product-service";

/**
 * Generated class for the SingleProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-single-product",
  templateUrl: "single-product.html"
})
export class SingleProductPage {
  starsCount: number = 4.5;
  products: Product[];
  @ViewChild(Slides) slides: Slides;
  goToSlide() {
    debugger;
    this.slides.slideTo(2, 500);
  }
  images = [
    { src: "assets/imgs/cat1.png" },
    { src: "assets/imgs/cat2.png" },
    { src: "assets/imgs/cat3.png" },
    { src: "assets/imgs/cat4.png" }
  ];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public productService: ProductServiceProvider
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad SingleProductPage");
    this.getProducts();
  }
  getProducts() {
    console.log("go");

    this.products = this.productService.getAllProduct();
    console.log(this.products);
  }
}
