import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { NavigationComponent } from './Components/navigation/navigation.component';
import { HttpClientModule }    from '@angular/common/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ClothesListComponent } from './pages/user/clothes-list/clothes-list.component';

import {MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule} from '@angular/material';

import { ApiService } from "./service/api.service";
import { IconComponent } from './Components/icon/icon.component';
import { IconButtonComponent } from './Components/icon-button/icon-button.component';
import { ClothesItemComponent } from './pages/user/clothes-list/clothes-item/clothes-item.component';
import { ClothesDetailComponent } from './pages/user/clothes-detail/clothes-detail.component';
import { PageContainerComponent } from './Components/page-container/page-container.component';
import { HorizontalDividerComponent } from './Components/horizontal-divider/horizontal-divider.component';
import { ShoppingcartComponent } from './pages/shoppingcart/shoppingcart.component';
import { ShoppingCartItemComponent } from './pages/shoppingcart/shopping-cart-item/shopping-cart-item.component';
import { CounterComponent } from "./Components/counter/counter.component";
import { CheckoutComponent } from './pages/user/checkout/checkout.component';
import {FormsModule} from "@angular/forms";
import { ConfirmationPageComponent } from './pages/user/confirmation-page/confirmation-page.component';
import { MultipleChoiceSelectComponent } from './Components/multiple-choice-select/multiple-choice-select.component';
import { CheckboxComponent } from './Components/checkbox/checkbox.component';
import { TagComponent } from './Components/tag/tag.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    ClothesListComponent,
    IconComponent,
    IconButtonComponent,
    ClothesItemComponent,
    ClothesDetailComponent,
    PageContainerComponent,
    HorizontalDividerComponent,
    ShoppingcartComponent,
    ShoppingCartItemComponent,
    CounterComponent,
    CheckoutComponent,
    ConfirmationPageComponent,
    MultipleChoiceSelectComponent,
    CheckboxComponent,
    TagComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
