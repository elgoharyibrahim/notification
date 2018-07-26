import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Product } from "./../../models/product.interface";
import { ProductServiceProvider } from "./../../providers/product-service/product-service";
import { ShopProduct } from "./../../models/shop-product.interface";
import { ShopProductServiceProvider } from "./../../providers/shop-product-service/shop-product-service";

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-search",
  templateUrl: "search.html"
})
export class SearchPage {
  products: Product[];
  shopProducts: ShopProduct[];
  search = "";
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public productService: ProductServiceProvider,
    public shopproductService: ShopProductServiceProvider
  ) {}
  ionViewDidLoad() {
    console.log("ionViewDidLoad SearchPage");
    this.getProducts();
    this.getShopProducts();
  }
  getProducts() {
    console.log("go");
    this.products = this.productService.getAllProduct();
    console.log(this.products);
  }
  getShopProducts() {
    console.log("shop");
    this.shopProducts = this.shopproductService.getAllShopProduct();
    console.log(this.shopProducts);
  }

  getItems(ev) {
    // Reset items back to all of the items

    var val = ev.target.value;
    console.log(val);
    if (val && val.trim() != "") {
      this.products = this.products.filter(item => {
        return (
          item.title.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
          item.shopName.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
          item.location.toLowerCase().indexOf(val.toLowerCase()) > -1
        );
      });
      this.shopProducts = this.shopProducts.filter(item => {
        return (
          item.shopName.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
          item.location.toLowerCase().indexOf(val.toLowerCase()) > -1
        );
      });
    } else {
      this.getProducts();
      this.getShopProducts();
    }
  }
}
