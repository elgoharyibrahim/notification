export interface Product {
  id: number;
  title: string;
  offer: number;
  like: boolean;
  pricebefore: number;
  priceAfter: number;
  img: {
    url: string;
    attribute: string;
  };
  tags :string;
  brands:string;
  shopName: string;
  shopId: number;
  location: string;
}
