export interface ShopProduct {
  id: number;
  like: boolean;
  img: {
    url: string;
    attribute: string;
  };
  tags: string;
  brands: string;
  shopName: string;
  shopId: number;
  location: string;
  rate:number;
}
