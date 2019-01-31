import {ClothesOrderItem} from "./ClothesOrderItem";

export interface OrderItem {
  firstName: string,
  lastName: string,
  street: string,
  plz: string,
  orderDate: Date,
  clothesOrderItems: ClothesOrderItem[]
}
