import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ClothesListComponent} from "./pages/user/clothes-list/clothes-list.component";
import {ClothesItemComponent} from "./pages/user/clothes-list/clothes-item/clothes-item.component";
import {ClothesDetailComponent} from "./pages/user/clothes-detail/clothes-detail.component";
import {ShoppingcartComponent} from "./pages/shoppingcart/shoppingcart.component";
import {CheckoutComponent} from "./pages/user/checkout/checkout.component";
import {ConfirmationPageComponent} from "./pages/user/confirmation-page/confirmation-page.component";
import {OrderListComponent} from "./pages/admin/order-list/order-list.component";

const routes: Routes = [
  {path: '', redirectTo: '/clothes', pathMatch: 'full'},
  {path: 'clothes', component: ClothesListComponent},
  {path: 'clothes/:id', component: ClothesDetailComponent},
  {path: 'shoppingcart', component: ShoppingcartComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'confirmation', component: ConfirmationPageComponent},
  {path: 'admin', redirectTo: '/admin/orderlist', pathMatch: 'full'},
  {path: 'admin/orderlist', component: OrderListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
