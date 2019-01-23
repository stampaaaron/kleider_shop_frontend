import {ClothesType} from "./ClothesType";
import {Brand} from "./Brand";
import {Season} from "./Season";

export interface Clothes {
  id: number,
  clothesType: ClothesType,
  brand: Brand,
  name: string,
  description: string,
  price: number,
  size: number,
  seasons: Season[]
}
