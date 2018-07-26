import { Product } from "./../../models/product.interface";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { ProductServiceProvider } from "./../../providers/product-service/product-service";

/**
 * Generated class for the WallPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-wall",
  templateUrl: "wall.html"
})
export class WallPage {
  Added: boolean = false;
  Added2: boolean = false;
  Added3: boolean = false;
  Added4: boolean = false;
  Added5: boolean = false;
  products: Product[];
  public buttonClicked: boolean = true;
  showadd = true;
  showdoneadded = false;
  addModal() {
    this.showdoneadded = true;
    this.showadd = false;
  }
  doneaddedModal() {
    this.showdoneadded = false;
    this.showadd = true;
  }
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public productService: ProductServiceProvider
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad WallPage");
    this.getProducts();
  }
  getProducts() {
    console.log("go");

    this.products = this.productService.getAllProduct();
    console.log(this.products);
  }

  public onButtonClick() {
    this.buttonClicked = !this.buttonClicked;
  }
  showDiv() {
    document.getElementById("pickit").style.display = "none";
  }

  switchAdded() {
    this.Added = true;
  }

  switchmark() {
    this.Added = false;
  }
  switchAdded2() {
    this.Added2 = true;
  }

  switchmark2() {
    this.Added2 = false;
  }
  switchAdded3() {
    this.Added3 = true;
  }

  switchmark3() {
    this.Added3 = false;
  }
  switchAdded4() {
    this.Added4 = true;
  }

  switchmark4() {
    this.Added4 = false;
  }
  switchAdded5() {
    this.Added5 = true;
  }

  switchmark5() {
    this.Added5 = false;
  }
}
