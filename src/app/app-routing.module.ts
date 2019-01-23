import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ClothesListComponent} from "./pages/user/clothes-list/clothes-list.component";
import {ClothesItemComponent} from "./pages/user/clothes-list/clothes-item/clothes-item.component";
import {ClothesDetailComponent} from "./pages/user/clothes-detail/clothes-detail.component";

const routes: Routes = [
  {path: '', redirectTo: '/clothes', pathMatch: 'full'},
  {path: 'clothes', component: ClothesListComponent},
  {path: 'clothes/:id', component: ClothesDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
