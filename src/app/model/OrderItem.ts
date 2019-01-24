import {ClothesOrderItem} from "./ClothesOrderItem";

export interface OrderItem {
  id: number,
  firstName: string,
  lastName: string,
  street: string,
  plz: string,
  clothesOrderItems: ClothesOrderItem[]
}
